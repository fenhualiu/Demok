export default {
  ServerUri: "broker.emqx.io", // 服务器hostname
  ServerPort: 8083, // port端口号
  ClientId: 'mqttjs_' + new Date().getTime(),//客户端id，自己设置
  TimeOut: 5000,// 超时
  KeepAlive: 0,// 心跳
  CleanSession: false, // 清除session，设置为true时，每次都以新session信息向服务器沟留~
  SSL:false,// 是否加密 （加密是wss前缀）
  UserName: "",// 用户名
  Password: ""//密码
}
