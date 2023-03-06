<template>
  <div id="GongYeCanShu"> 
         <div
    class="GongYeCanShu-item"
    v-for="item in EquipFlopData"
    :key="item.title"
  >

  <div class="EquGongYeCanShuip-title" style="height:20%;">{{ item.title }}</div>
    <div class="GongYeCanShu-context" style="height:20%;">当班故障：{{ item.number1 }}</div>
    <div class="GongYeCanShu-context" style="height:20%;">当月故障：{{ item.number2}}</div>
    <div class="GongYeCanShu-context" style="height:20%;">保养计划：{{ item.number3 }}</div>
</div>



</div>

</template>
  
  <script>

export default {
  name: "GongYeCanShu",
  data() {
    return {
      EquipFlopData: []
    };
  },
  props: {
    CanShudigitalData1: {
      type: Array,
      default: () => {}
    }
  },
  watch:{
    CanShudigitalData1(newValue,oldValue){
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
      this.EquipFlopData=Equipdata
    }
  },
  methods: {
    createData() {
      const { randomExtend } = this;
      this.EquipFlopData = [
        {
          title: "季度报告",
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: "实时不良",
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: "当班目标",
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: "当班达成",
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: "月度目标",
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: "年度目标",
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
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
  components: {  }
};
</script>
  
  <style lang="less">
#GongYeCanShu {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: start;
  align-items: normal;
  //background: rgba(38, 76, 164, 0.5);
  background: #345A9A;

  border-style: solid;
  border-width: 1px;
  border-color: rgba(181, 186, 197, 0.5);
  //line-height: calc(20vh - 45px);

  //11%
  .GongYeCanShu-item {
    width: 16%;
    height:20%;
    position: relative;
    margin: 5px;
    font-size:15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-left: 1px solid rgb(6, 30, 93);
    border-right: 1px solid rgb(6, 30, 93);
    border-top: 1px solid rgb(6, 30, 93);
    border-bottom: 1px solid rgb(6, 30, 93);
  }

  .EquGongYeCanShuip-title {
    background-color: #7a83e7;
    height: 100%;
    width: 100%;
    margin: 0%;
    margin-top: -0%;
  }
  .GongYeCanShu-context{
    text-align:
    center;
  margin:2% 0px 0px 13%;
  }
  .Equip-flopp {
    width: 111px !important;
    display: flex;
    margin-top: 10px;
  }
  
}
</style>
  