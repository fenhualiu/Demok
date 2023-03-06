<template>
  <div id="SheBeiGZ1"> 
         <div
    class="Equip1-item"
    v-for="item in digitalFlopData"
    :key="item.title"
  >

  <div class="Equip1-title" style="height:20%;">{{ item.title }}</div>
    <div class="Equip1-context" style="height:20%;">{{ item.number1 }}</div>
    <div class="Equip1-context" style="height:20%;">{{ item.number2}}</div>
    <div class="Equip1-context" style="height:20%;">{{ item.number3 }}</div>
</div>



</div>

</template>
  
  <script>

export default {
  name: "SheBeiGZ1",
  props:{
    GuZhangData: {
        type: Object,
      default: function () {
        return {}
      }     
    }
  },
  data() {
    return {
      digitalFlopData:[],
    }
  },
  methods: {
    createData(GuZhangData) {
      const { randomExtend } = this; 
      this.digitalFlopData = [
        {
          title: "运行周期",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        },
        {
          title: "实时不良",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        },
        {
          title: "当班目标",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        },
        {
          title: "当班达成",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        },
        {
          title: "月度目标",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        },
        {
          title: "年度目标",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        },
        {
          title: "月度目标",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        },
        {
          title: "年度目标",
          number1: "当班故障："+randomExtend(20, 30).toString(),
          number2:  "当月故障："+randomExtend(20, 30).toString(),
          number3:  "保养计划："+randomExtend(20, 30).toString()
        }
      ];
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      }
    }
  },
  watch:{
    GuZhangData(newValue,oldValue){
      let Equipdata=[]
      for(const newValuekey in newValue)
      {       
        let option=newValue[newValuekey];
        Equipdata.push({        
          title: newValuekey,         
          number1: option.number1,
          number2: option.number2,
          number3: option.number3     
        })
      }
      this.digitalFlopData=Equipdata
    }
  },
  mounted() {
    const { createData } = this;
    createData();
    setInterval(createData, 1000);
  },
  components: {

  }
};
</script>
  
  <style lang="less">
#SheBeiGZ1 {
 // all:initial;

  height: 100%;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  //justify-content: start;
  align-items: center;
  background: rgba(6, 30, 93,0.5);

  border-style: solid;
  border-width: 1px;
  border-color: rgba(70, 115, 228, 0.5);
  //line-height: calc(20vh - 45px);

  //11%
  .Equip1-item {
    width: 20%;
    height:15%;
    font-size: 15px;
    position: relative;
    margin: 5px;

    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    

    border-left: 1px solid rgb(6, 30, 93);
    border-right: 1px solid rgb(6, 30, 93);
    border-top: 1px solid rgb(6, 30, 93);
    border-bottom: 1px solid rgb(6, 30, 93);
  }

  .Equip1-title {
    // font-size: 15px;
    background-color: #7a83e7;
    height: 100%;
  width: 100%;
    margin: 0%;
    margin-top: -0%;
    //margin-bottom: 10px;
  }
  .Equip1-context{
    margin-top: 0px;
    color: #7a83e7;
  }
  .Equip-flopp {
    width: 111px !important;
    display: flex;
    //font-size: 34px;
    margin-top: 10px;
  }
}
</style>
  