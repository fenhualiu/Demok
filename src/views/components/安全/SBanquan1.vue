<template>
  <div id="SBanquan1"> 
         <div
    class="SBanquan1-item"
    v-for="item in SafedigitalData"
    :key="item.title"
  >

  <div class="SBanquan1-title" style="height:18%;">{{ item.title }}</div>
    <div class="SBanquan1-context" style="height:18%;">{{ item.number1 }}</div>
    <div class="SBanquan1-context" style="height:20%;">{{ item.number2}}</div>
    <div class="SBanquan1-context" style="height:20%;">{{ item.number3 }}</div>
</div>



</div>

</template>
  
  <script>

export default {
  name: "SBanquan1",
  data() {
    return {
      colors: ['#f46827', '#4d99fc', '#40fbee'],
      SafedigitalData: []
    };
  },
  props: {
    Safedata1: {
      type: Array,
      default: () => {}
    }
  },
  watch:{
    Safedata1(newValue,oldValue){
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
      this.SafedigitalData=Equipdata
    }
  },
  methods: {
    createData() {
      const { randomExtend } = this;
      this.SafedigitalData = [
        {
          title: "季度报告",
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
  mounted() {
    const { createData } = this;
    createData();
    setInterval(createData, 30000);
  },
  components: {}
};
</script>
  
  <style lang="less">
#SBanquan1 {
 // all:initial;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: start;
  align-items: normal;
  //background: rgba(38, 76, 164, 0.5);


  border-style: solid;
  border-width: 1px;
  border-color: rgba(70, 115, 228, 0.5);
  //line-height: calc(20vh - 45px);

  //11%
  .SBanquan1-item {
    width: 20%;
    height:15%;
    font-size:16px;
    position: relative;
    margin: 0.3%;
    background: #345A9A;



    border-left: 1px solid rgb(6, 30, 93);
    border-right: 1px solid rgb(6, 30, 93);
    border-top: 1px solid rgb(6, 30, 93);
    border-bottom: 1px solid rgb(6, 30, 93);
  }

  .SBanquan1-title {
    background-color: #7a83e7;
    text-align: center;
    height: 100%;
    //line-height: 30px;
    width: 100%;
    margin: 0%;
    margin-top: -0%;
  }
  .SBanquan1-context{
    text-align:center;
    margin:2% 0px 0px 3%;
  }
  .Equip-flopp {
    width: 111px !important;
    display: flex;
    //font-size: 34px;
    margin-top: 10px;

  }
  
}
</style>
  