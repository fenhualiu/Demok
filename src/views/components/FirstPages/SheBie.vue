<template>
  <div id="SheBie">     
        <div class="header" >{{$t('language.Device')}}</div> 
        <div class="SBbody">
         <div
    class="digital-flop-item"
    v-for="item in SBdigitalFlopData"
    :key="item.title"
  >
    <div class="digital-flop-title" style="height:50px;">{{ item.title }}</div>
    <div class="digital-flopp">
      <dv-digital-flop
        :config="item.number"
        style="width:100px;height:45px;font-size: 25px;"
      />
        
    </div>
    <div class="unit" style="font-size:3px;">{{ item.unit }}</div>
</div>
</div>

</div>

</template>

<script>
export default {
name: 'SheBie',
props: {
  SBdigitalData: {
      type: Object,
      default: function () {
        return {}
      }    
    }
  },
data () {
  return {
    SBdigitalFlopData: []
  }
},
watch:{
  SBdigitalData (newValue, oldValue) {
      this.createData(newValue)
    }
},
methods: {
  createData (SBdigitalData) {
    const { randomExtend } = this

    this.SBdigitalFlopData = [
      {
        title: '实时不良',
        number: {
          number: [randomExtend(5, 10)],
          content: '{nt}',
          textAlign: 'center',
          style: {
            fill: '#f46827',
            fontWeight: 'bold'
          }
        },
        unit: '台'
      },
      {
        title: '当班目标',
        number: {
          number: [randomExtend(20, 30)],
          content: '{nt}',
          textAlign: 'center',
          style: {
            fill: '#40faee',
            fontWeight: 'bold'
          }
        },
        unit: '%'
      },
      {
        title: '当班达成',
        number: {
          number: [randomExtend(0, 1)],
          content: '{nt}',
          textAlign: 'center',
          style: {
            fill: '#4d99fc',
            fontWeight: 'bold'
          }
        },
        unit: '%'
      },
      {
        title: '月度目标',
        number: {
          number: [randomExtend(5, 10)],
          content: '{nt}',
          textAlign: 'center',
          style: {
            fill: '#f46827',
            fontWeight: 'bold'
          }
        },
        unit: '%'
      },
      {
        title: '月累计达成',
        number: {
          number: [randomExtend(5, 10)],
          content: '{nt}',
          textAlign: 'center',
          style: {
            fill: '#40faee',
            fontWeight: 'bold'
          }
        },
        unit: '%'
      }
    ]

    let data = []
      for (const digitalDataKey in SBdigitalData) {
        let cfg = configs[digitalDataKey] || undefined
        let color = this.colors[1]
        if (cfg !== undefined) {
          let { '上限': upper, '下限': lower, '小数位数': fixed, '单位': unit } = cfg
          // 超过上限
          if (upper !== undefined && SBdigitalData[digitalDataKey] > upper) {
            color = this.colors[2]
          }
          // 低于下限
          if (lower !== undefined && SBdigitalData[digitalDataKey] < lower) {
            color = this.colors[0]
          }
          data.push(
            {
              title: digitalDataKey,
              number: {
                number: [SBdigitalData[digitalDataKey]],
                toFixed: fixed || 0,
                content: '{nt}',
                textAlign: 'right',
                style: {
                  fill: color,
                  fontWeight: 'bold'
                }
              },
              unit: unit
            }
          )
        }
      }
      //this.SBdigitalFlopData = data
  },
  randomExtend (minNum, maxNum) {
    if (arguments.length === 1) {
      return parseInt(Math.random() * minNum + 1, 10)
    } else {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    }
  }
},
mounted () {
  const { createData } = this

  createData()

  setInterval(createData, 30000)
}
}
</script>

<style lang="less">

#SheBie {
height: 100px;
width: 99%;
flex-shrink: 0;
//display: flex;
//justify-content: space-between;
align-items: center;
background-color: rgba(6, 30, 93, 0.5);


border-style:solid;
border-width: 1px;
border-color: rgba(70, 115, 228, 0.5);

.SBbody{
  margin-left: 15%;
      display: flex;
      justify-content: space-around;
}

.header{
  background-color: rgba(80, 128, 250, 0.5);
background:rgba(6, 94, 165, 0.5);
font-family: 'Courier New', Courier, monospace;
position: absolute;
font-size: 30px;
font-weight: bolder;
  margin-right: 0px;
  width: 95px;
height:95px;
line-height: 105px;
text-align: center;
}


.dv-decoration-10 {
  position: absolute;
  width: 95%;
  left: 2.5%;
  height: 5px;
  bottom: 0px;

}
//11%
.digital-flop-item {
  width: 91px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.digital-flop-title {
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 10px;

}

.digital-flopp {
  display: flex;
  font-size: 55px;
  margin-top: -35px;
}

.unit {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  text-align: left;
}
}

</style>
