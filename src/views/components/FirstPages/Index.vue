<template>
  <div id="data-view">

      <Row class="main-content1" type="flex" justify="space-around">
        <Row class="Row">
          <Col span="12">
            <ChanLiang/>
          </col>
          <Col span="12">
            <Pinzhi/>
          </col>
        </Row>
        <Row class="Row">
          <Col span="12">
            <SheBie/>
          </col>
          <Col span="12">
            <GongYi/>
          </col>
        </Row>
        <Row class="Row">
          <Col span="12">
            <NengYuan/>
          </col>
          <Col span="12">
            <FuCai/>
          </col>
        </Row>
      </Row>
<Row type="flex" justify="space-around" class="main-content2" >
	<Map/>

</Row>

  </div>
</template>

<script >

import ChanLiang from './ChanLiang'
import Pinzhi from './Pinzhi'
import FuCai from './FuCai'
import GongYi from './GongYi'
import NengYuan from './NengYuan'
import SheBie from './SheBie'
import Map from './Map'
import mqtt from 'paho-mqtt'
import mqttConfig from '@/views/configs/mqttConfig';
		    
var that
export default {
  name: 'DataView',
  components: {
    ChanLiang,
    Pinzhi,
	SheBie,
	FuCai,
	GongYi,
	NengYuan,
	Map
  },
  data () {
    return {
      CLdigitalData:{},
      FCdigitalData:{},
      GYdigitalData:{},
      NYdigitalData:{},
      PZdigitalData:{},
      SBdigitalData:{},
      Mapconfig:[],
      messages: [],
      subscription: {
        topic: 'TZMES/#'
      },
      client: null,
    }
  },
    created: function () {
      // `this` 指向 vm 实例
      that=this
    },
    mounted(){
      //页面加载完成后,才执行
that.createConnection(mqttConfig)
console.log("————————————————————————————————————————————————————————————")
console.dir(this.messages)
    },
  methods: {
    onConnect() {
        console.log("onConnect");
        // 订阅主题
       const { topic} = this.subscription   
       console.log(topic)
       this.client.subscribe(topic)       
        // 新建消息
       let message = new mqtt.Message("Hello");
        message.destinationName = "/World";
        // 发送消息
        this.client.send(message);
    },

	// 连接丢失处理
     onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0)
            console.log("onConnectionLost:"+responseObject.errorMessage);
    },

	// 消息送达处理
     onMessageArrived(message) {
       // console.log("onMessageArrived:"+message.payloadString);
       if(message.payloadString!=null){
        this.messages.push("on  Message  Arrived： " + message.payloadString+"——on topic——"+message.destinationName);
       }
    },

    // 创建连接
    createConnection (option) {
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
#data-view {
  width: 100%;
  height: 100%;
  background-color: #070d2b;
  color: #fff;

  #dv-full-screen-container {
    background-size: 100% 100%;
    box-shadow: 0 0 3px rgb(102, 255, 0);
    display: flex;
    flex-direction: column;
  }

  .main-content1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    //grid-row-gap:90px;
  }
.Row{

}
.main-content2 {

height: 65%;
width: 100%;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 120px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>
