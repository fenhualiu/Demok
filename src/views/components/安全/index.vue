<template>
    <div class="threemore1" >
        <div align="left" class="shebeianquanjiankong">
          {{$t('language.Safety.Device_SecurityMonitor')}}
       </div>

        <div class="SBanquan">
        <SBanquan1/>
        <SBanquan2/>
      </div>

      <div align="left" class="shebeianquanjiankong">
        {{$t('language.Safety.Security_RiskMap')}}
       </div>
        <div class="DiTuanquan">
        <DiTuanquan/>
      </div>
    </div>

</template>
<script>
import SBanquan1 from './SBanquan1'
import SBanquan2 from './SBanquan2'
import DiTuanquan from './DiTuanquan'
import mqtt from 'paho-mqtt'
import mqttConfig from '@/views/configs/mqttConfig';

export default {
  name: "twoone",
  components:{
    SBanquan1,
    SBanquan2,
    DiTuanquan
  },
  data() {
    return {
      Safedata1:[],
      Safedata2:[]
    };
  },
  mounted(){
    this.mqttConnect(mqttConfig)
  },
  methods: {
    onConnect() {
        console.log("onConnect");
        const { topic} = this.subscription           
        this.client.subscribe(topic)       
        console.log(topic)    
  
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
};
</script>
<style scoped>
.threemore1{
    width: 100%;
    height: 100%;
    background: #4e78ab;
}
.shebeianquanjiankong{
    padding: 0.2%;
    text-align: left;
     font-size: 20px;
     font-weight: 500;
    color: white;
}

 .SBanquan{
    height: 30%;
    margin: 0px;

      border-left: 2px solid  rgb(186, 193, 206);
      border-right: 2px solid rgb(186, 193, 206);
      border-top: 2px solid rgb(205, 210, 220);
      border-bottom: 2px solid rgb(232, 235, 240);
  }
  /*   align-items: flex-start !important; */
.DiTuanquan{
    height: 61%;
    margin: 0%;
    border-left: 2px solid  rgb(186, 193, 206);
      border-right: 2px solid rgb(186, 193, 206);
      border-top: 2px solid rgb(205, 210, 220);
      border-bottom: 2px solid rgb(232, 235, 240);
}

</style>