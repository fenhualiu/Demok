<template>
    <div id="XingNengJC" >

          <Row :gutter="4" type="flex" justify="start"  class="code-row-bg1">
            <Col span="4" v-for="item in XNdigitalData"
      >
              <div class="TB" >
            <span class="table1" >{{item.name}}</span>
            <span class="table1" >{{item.value}}</span>
              </div>

              <div class="TB">              
            <span class="table1" >{{item.name1}}</span>
            <span class="table1" >{{item.value1}}</span>
              </div>
              <div class="TB">
                <span class="table1" >{{item.name2}}</span>
            <span class="table1" >{{item.value2}}</span>
              </div>
            </Col>
            
            <Col span="8">
            <div class="END">
          <span class="END1" id="END1">检测结果</span>
          <span class="END2" id="END2"> OK</span>
             </div>
          </Col>
           
        </Row>


    </div>
</template>
<script>  

var that;
export default {
    name: 'XNJianCe',
    props:{
      XNData:{
        type: Array,    
        default: () => []     
      }
    },
    components:{      
    },
    watch:{
      XNData(newValue){
        let configData=[]
        for(const obj in newValue){
          configData.push({
            name: newValue[obj].name,
            value:newValue[obj].value,
            name1: newValue[obj].name1,
            value1:newValue[obj].value1,
            name2: newValue[obj].name2,
            value2: newValue[obj].value2,
          })        
        }
        this.XNdigitalData=configData;
        let Result=document.getElementById("END2");
        if(newValue.result.toUpperCase()==="NG".toUpperCase()){
          Result.style.color="rgb(249, 32, 13)";
        }
        else{
          Result.style.color="rgb(11, 225, 82)";
        }

      }
    },
    data () {
      return {
        XNdigitalData:[
          {
            name: '耐压电压（V）',
            value: 70,
            name1: '耐压电流（V）',
            value1: 90,
            name2: '耐压电压（V）',
            value2: 38,
          },
          {
            name: '耐压电压（V）',
            value: 70,
            name1: '耐压电压（V）',
            value1: 120,
            name2: '耐压电压（V）',
            value2: 78,
          },
          {
            name: '耐压电压（V）',
            value: 70,
            name1: '耐压电压（V）',
            value1: 120,
            name2: '耐压电压（V）',
            value2: 78,
          },
          {
            name: '耐压电压（V）',
            value: 70,
            name1: '耐压电压（V）',
            value1: 120,
            name2: '耐压电压（V）',
            value2: 78,
          },
          {
            name: '耐压电压（V）',
            value: 70,
            name1: '耐压电压（V）',
            value1: 120,
            name2: '耐压电压（V）',
            value2: 78,
          },
          {
            name: '耐压电压（V）',
            value: 70,
            name1: '耐压电压（V）',
            value1: 120,
            name2: '耐压电压（V）',
            value2: 78,
          },
          {
            name: '绝缘电压',
            value: 58,
            name1: '绝缘电阻',
            value1: 110,
            name2: '耐压电压（V）',
            value2: 68,
          },
          {
            name: '绝缘电阻',
            value: 23,
            name1: '绝缘电阻',
            value1: 65,
            name2: '耐压电压（V）',
            value2: 91,
          }
        ]
      }
    },
    created: function () {
      // `this` 指向 vm 实例
      that = this
    },
    mounted(){
      //页面加载完成后,才执行
        //document.getElementById("ul").innerHTML=XNdigitalData[0].name;
    },
    methods: {
      AddDate(){
       
      }
    }
  }

</script>
  
<style>
  
.XingNengJC
{
    width: 100%;
    height: 100%;
  text-align: center;
  background-color: antiquewhite;

  border-style:solid;
  border-width: 1px;
  border-color: rgba(163, 175, 206, 0.5);

}

.title{
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0px;
  color: white;
}

.code-row-bg1{
  margin-top: 1%;
  margin-left: 1%;
}

.code-row-bg2{
  margin-left: 1%;
}
/* margin-top: -1%;
  margin-top: -9%;
 <!-- .chart-view{
  margin: 20px auto;
  width: 400px;
  height: 400px;
} --> */
.xingneng1{
  margin: 0px auto;
  width: 100%;
  height: 50%;
  float: left;
  flex-direction: column;
  background-color: antiquewhite;
}
/*  display: inline; 
    float: left;
      margin: -7%;
   padding:1%;
*/
.TB{
  height: 30%;
  width: 100%;
  margin: 0%;
}
/*line-height:30px;*/
.table1{
  text-align: center;
  padding:2.2%;
  display:inline-block;
  width:50%;
  height:100%;

  font-size: 15px;
  font-weight: 100;
  color: rgb(146, 114, 114);

  border:1px solid rgb(27, 5, 48);
    
}

.END{
  margin-top: 5% !important;
  margin-left: -35%;

}
.END1{

  padding: 3%;
  font-size: 30px;
  font-weight: 200;
  color: rgb(233, 219, 219);
  border-left: 2px solid  rgb(27, 5, 48);
      border-right: 2px solid rgb(27, 5, 48);
      border-top: 2px solid rgb(27, 5, 48);
      border-bottom: 2px solid rgb(27, 5, 48);
}
.END2{
  font-size: 30px;
  font-weight: 200;
  padding: 3%;
  color: rgb(11, 225, 82);
  border-left: 0px solid  rgb(27, 5, 48);
  border-right: 2px solid rgb(27, 5, 48);
      border-top: 2px solid rgb(27, 5, 48);
      border-bottom: 2px solid rgb(27, 5, 48);
}

</style>
