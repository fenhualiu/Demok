<template>
    <div class="twomore1" >
        <div align="left" class="gongyihead">
          {{$t('language.ProcessContext.Process_Parameter')}}
       </div>
        <div class="bordinary">
        <GongYeCanShu/>
        <GongYiCanShu1/>
      </div>
        <div align="left" class="gongyihead">
          {{$t('language.ProcessContext.Line_DeviceBeat')}}
       </div>
       <LineEquip class="gongyichart" />
       <p align="left" class="gongyihead">
        {{$t('language.ProcessContext.ProcessEvent')}}
       </p>
       <div class="gongyisj">
        <GongyYiShiJian/>
      </div>
    </div>

</template>
<script>
import GongYeCanShu from './GongYeCanShu'
import GongYiCanShu1 from './GongYiCanShu1'
import LineEquip from './LineEquip'
import GongyYiShiJian from './GongyYiShiJian'
import mqtt from 'paho-mqtt'
import mqttConfig from '@/views/configs/mqttConfig';

export default {
  name: "twoone",
  components:{
    GongYeCanShu,
    LineEquip,
    GongyYiShiJian,
    GongYiCanShu1
  },
  data() {
    return {
      CanShudigitalData1: [],
      CanShudigitalData2: [],
      GYshijian:[],
      LineData:[],
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
        if(message.destinationName.toUpperCase()==="TZMES/ranking".toUpperCase())
        {
          this.receiveNews.push("===TZMES/ranking==="+message.payloadString);     
        }        
      }
    },
    // 创建连接
    mqttConnect (option) {
	  // 创建一个客户端 
    this.client = new mqtt.Client(option.ServerUri, Number(option.ServerPort), option.ClientId);
    this.client.onConnectionLost = this.onConnectionLost; // 定义连接丢失方法
    this.client.onMessageArrived = this.onMessageArrived; // 定义消息送达方法
    this.client.connect({onSuccess:this.onConnect}); // 连接
    },
  }
};
</script>
<style scoped>
.twomore1{
    width: 100%;
    height: 100%;
    background-color: #34447a;
}
.gongyihead{
    padding: 0px;
    text-align: left;
     font-size: 20px;
     font-weight: 500;
    color: white;
}
.gongyichart{
  margin: 1%;
     height:28%;
     padding: 0%;
    width: auto;

 }

 .gongyibordinary{
    height: 50%;
    margin: 2%;

  }

  .gongyisj{
    margin-left: 0%;
  padding-top: 1%;
  width: 97%;
  height: 35%;
  }
</style>