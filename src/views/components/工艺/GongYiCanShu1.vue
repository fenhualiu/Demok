<template>
  <div id="GongYiCan1"> 
         <div
    class="GongYiCan1-item"
    v-for="item in EquipFlopData1"
    :key="item.title"
    style=""
  >

  <div class="GongYiCan1-title" style="height:20%;">{{ item.title }}</div>
    <div class="GongYiCan1-context" style="height:20%;">当班故障：{{ item.number1 }}</div>
    <div class="GongYiCan1-context" style="height:20%;">当月故障：{{ item.number2}}</div>
    <div class="GongYiCan1-context" style="height:20%;">保养计划：{{ item.number3 }}</div>
</div>
</div>

</template>
  
  <script>

export default {
  name: "GongYiCanShu1",
  data() {
    return {
      EquipFlopData1: []
    };
  },
  props: {
    CanShudigitalData2: {
      type: Array,
      default: () => {}
    }
  },
  watch:{
    CanShudigitalData2(newValue,oldValue){
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
      this.EquipFlopData1=Equipdata
    }
  },
  methods: {
    createData() {
      const { randomExtend } = this;
      this.EquipFlopData1 = [
        {
          title: "运行周期",
          number1: randomExtend(20, 30).toString(),
          number2: randomExtend(20, 30).toString(),
          number3: randomExtend(20, 30).toString()
        },
        {
          title: "实时不良",
          number1: randomExtend(20, 30).toString(),
          number2: randomExtend(20, 30).toString(),
          number3: randomExtend(20, 30).toString()
        },
        {
          title: "当班目标",
          number1: randomExtend(20, 30).toString(),
          number2: randomExtend(20, 30).toString(),
          number3: randomExtend(20, 30).toString()
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
  
  <style lang="less" >
#GongYiCan1 {
 // all:initial;

  height: 100%;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: start;
  align-items: normal;
  background: #345A9A;
  border-left: 1px solid rgba(181, 186, 197, 0.5);
    border-right: 1px solid rgba(181, 186, 197, 0.5);
    border-top: 0px solid rgb(6, 30, 93);
    border-bottom: 1px solid rgba(181, 186, 197, 0.5);

  //line-height: calc(20vh - 45px);

  //11%
  .GongYiCan1-item {
    width: 15.98%;
    height:20%;
    position: relative;
    margin: 5px;
    font-size: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-left: 1px solid rgb(6, 30, 93);
    border-right: 1px solid rgb(6, 30, 93);
    border-top: 1px solid rgb(6, 30, 93);
    border-bottom: 1px solid rgb(6, 30, 93);
  }

  .GongYiCan1-title {
    background-color: #7a83e7;
    height: 100%;
    width: 100%;
    margin: 0%;
    margin-top: -0%;
  }

}
.GongYiCan1-context{
    text-align:left;
  margin:2% 0px 0px 1%;
  }
</style>
  