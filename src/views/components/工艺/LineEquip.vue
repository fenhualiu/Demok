<template>
    <div class="Lchart_view" >
        <div id="mychart" class="Lchart-view-4"></div>
    </div>
</template>
<script>  
var that;
export default {
    name: 'LineEquip',
    props:{
      LineData: {     
        type: Array,    
        default: () => []  
      }
    },
    data () {
      return {
        chart1_title: '柱图测试',
        chart1_dataName:'销量',
        chart1_name:null,
        chart1_data:null,
        chartData1:[ 4.3,5.1,7.6,5.2,3.7,6.2,5.8,5.2,6.8],
        myChart1:{},
        option1: {
  grid:{
            bottom:'21%',           
          },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Evaporation', 'Precipitation', 'Temperature']
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 8,
      interval:2,
      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 8,
      interval: 2,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      itemStyle: {
            normal: {
　　　　　　　　//这里是重点
                color: '#749f83'
            }
        },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml';
        }
      },
      data: []
    },
    {
      name: 'Temperature',
      type: 'line',
      itemStyle: {
            normal: {
　　　　　　　　//这里是重点
                color: '#5e3901',
                lineStyle: {
                      width:3// 0.1的线条是非常细的了
                    }
            }
        },
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °C';
        }
      },
      data: [5.0, 5.2, 5.3, 5.5, 5.3, 5.2, 5.3, 5.4, 5.0, 5.5, 5.0, 5.2]
    }
  ]
}
      }
    },
    watch:{
      LineData (newValue) {
      this.optionData(newValue)
    }
    },
    created: function () {
      // `this` 指向 vm 实例
      that = this
    },
    mounted(){
      //页面加载完成后,才执行
      that.showChart4();
    },
    methods: {
      optionData(){
        let xAxisdata=[]
        let seriesdata=[]
         for(const LineDatakey in LineEquipData){
           xAxisdata.push(LineDatakey)
           seriesdata.push(LineData(LineDatakey))
          }
        that.option1.series[0].data=seriesdata;
        that.option1.xAxis[0].data=xAxisdata;
        that.myChart1.setOption(that.option1);
      },
      showChart4()
      {
        var chartDom = document.getElementById('mychart');
         that.myChart1 = that.$echarts.init(chartDom);
         that.option1.series[0].data=this.chartData1;
        that.option1.xAxis[0].data=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','捡预压机','转子精车机'];
      that.option1 && that.myChart1.setOption(that.option1);

      }
    }
  }

</script>
  
<style>
  
.Lchart_view
{
    width: 100%;
    height: 100%;
  padding:2% ;
  text-align: center;
  background: #3a4574;

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

/* <!-- .chart-view{
  margin: 20px auto;
  width: 400px;
  height: 400px;
} --> */


.Lchart-view-4{
  margin: 0px auto;
  width: 100%;
  height: 275px;
}
</style>
