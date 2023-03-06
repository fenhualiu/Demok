<template>
    <div id="oneOne">
      <div align="left" class="charthead">
        {{$t('language.Bad_information_first_time_on_duty')}}
       </div>
        <LineEquip  class="linechart" />
      <p  class="charthead">
        {{$t('language.PerformancedInspection')}}
       </p>
       <div class="xnjc">
        <XingNengJianCe />
       </div>

       <p  class="charthead">
        {{$t('language.QualityEvent')}}
       </p>
       <div class="pzsj">
        <PZshijian/>
        </div>
    </div>
 
</template>
<script>
import LineEquip from './LineEquip'
import XingNengJianCe from './XNJianCe'
import PZshijian from './PZshijian'
import mqtt from 'paho-mqtt'
import mqttConfig from '@/views/configs/mqttConfig';

export default {
  name: 'One',
  components: {
    LineEquip,
    XingNengJianCe,
    PZshijian
},
  data () {
    return {
      client:null,
      PZshijianData:[],
      LineEquipData:[],
      XNData:[]
    }
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
        if(message.destinationName.toUpperCase()==="TZMES/ranking".toUpperCase())
        {
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
}
</script>
<style lang="less">
#oneOne{
    width: 100%;
    height: 100%;
    background: #275c9d;
  .jianju{
    grid-row-gap:90px;
}
.linechart{
 // margin-top: -760px;
  
     height:30%;
     padding: 0%;
    width: auto;
    border:1px solid rgb(242, 242, 238);
 }
.charthead{
  margin: 0px 0px 1px 5px;//上，右，下，左
  padding: 0px;
    text-align: left;
     font-size: 20px;
     font-weight: 500;
    color: white;
    //line-height: calc(20vh - 65px);

}

.xnjc{
  background: #22446f;
  width: 100%;
  height: 28%;
  border:1px solid white;
  //background-color: #ed8cb5;
}
.pzsj{
  width: 100%;
  height: 25%;
 //margin: 0px 10px 0px 10px;
  border:1px solid rgb(242, 242, 238);
}

} 


</style>