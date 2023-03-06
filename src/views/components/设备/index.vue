<template>
  <div id="twoone"> 
    <div align="left" class="设备故障表头">
      {{$t('language.DeviceContext.Device_fault_Maintenance_planning')}}
       </div>
    <div class="bordinary">
        <SheBeiGuzhang/>
        <SheBeiGZ1/>       
      </div>
      <p align="left" class="设备故障表头">
        {{$t('language.DeviceContext.Wire_SafetyStock')}}
        </p>
      <div class="Table">
        <XianTiBeiJian/>
      </div>
      <p align="left" class="设备故障表头">
        {{$t('language.DeviceContext.DeviceAndon_FaultContext')}}
      </p>
      <div class="baojing">
        <BaoJing/>
      </div>
</div>

</template>
  
  <script>
import SheBeiGuzhang from './SheBeiGuzhang'
import SheBeiGZ1 from './SheBeiGZ1'
import XianTiBeiJian from './XianTiBeiJian'
import BaoJing from './BaoJing'
import mqtt from 'paho-mqtt'
import mqttConfig from '@/views/configs/mqttConfig';


export default {
  name: "twoone",
  components:{
    SheBeiGuzhang,
    XianTiBeiJian,
    BaoJing,
    SheBeiGZ1
  },
  data() {
    return {
      client: null,
      BJscrollData:[],
      GuZhangData: [],
      XTData:{}      
    };
  },
  mounted(){
    this.mqttConnect(mqttConfig)
  },
  methods: {
    onConnect() {
        console.log("onConnect");
    
        const { topic} = this.subscription         
        console.log(topic)      
        this.client.subscribe(topic)       
  
        let message = new mqtt.Message("Hello");
        message.destinationName = "/World";

        this.client.send(message);
    },
     onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0)
            console.log("onConnectionLost:"+responseObject.errorMessage);
    },
     onMessageArrived(message) {
       // console.log("onMessageArrived:"+message.payloadString);
       if(message.payloadString!=null){
        this.messages.push("on——Message——Arrived： " + message.payloadString+"——on topic——"+message.destinationName);
        if(message.destinationName.toUpperCase()==="TZMES/ranking".toUpperCase()){
          this.receiveNews.push("===TZMES/ranking==="+message.payloadString);     
        }        
       }
    },
    // 创建连接
    mqttConnect (option) {
	  // 创建一个客户端 
    console.log(" createConnection! ");
    this.client = new mqtt.Client(option.ServerUri, Number(option.ServerPort), option.ClientId);
    console.log(" createConnection1! ");
    this.client.onConnectionLost = this.onConnectionLost; // 定义连接丢失方法
    this.client.onMessageArrived = this.onMessageArrived; // 定义消息送达方法
    this.client.connect({onSuccess:this.onConnect}); // 连接
    },
  }
};
</script>
  
  <style lang="less">
#twoone{
  width: 100%;
    height: 100%;
  background: #264c7b;

  .bordinary{
    margin: 0px;
 
  }
.设备故障表头{
  color: rgb(247, 241, 241);
  font-size: 24px ;
}
.Table{
  height: auto;
  border:2px solid rgb(242, 242, 238);
}
.baojing{
  width: 100%;
  height: 28%;
  border:2px solid rgb(242, 242, 238);
}
}
</style>
  