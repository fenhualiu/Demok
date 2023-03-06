<template>
    <div class="chart_view" >
        <div id="mychart" class="chart-view-4"></div>

    </div>
</template>
<script>  
var that;
export default {
    name: 'ProductNumer',
    props:{
      LineEquipData: {     
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
        chartData:[1,17,3,9,1,31],
        myChart:{},
        option:{
          backgroundColor: '#02384f',//背景色
          grid:{
            bottom:'15%',
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
            max: 40,     
            interval:10,     
            axisLabel: {                 
              formatter: '{value} '    
            }   
          }, 
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
            data:[]
          }
        ]
      }
      }
    },
    watch:{
      LineEquipData (newValue) {
      this.ConfigData(newValue)
    }
    },
    created: function () {
      // `this` 指向 vm 实例
      that = this
    },
    mounted(){
      //页面加载完成后,才执行
      that.showChart4();
     // that.ConfigData();
    },
    methods: {
      ConfigData(LineEquipData){
        let xAxisdata=[]
        let seriesdata=[]
         for(const LineDatakey in LineEquipData){
           xAxisdata.push(LineDatakey)
           seriesdata.push(LineData(LineDatakey))
          }
        that.option.series[0].data=seriesdata;
        that.option.xAxis[0].data=xAxisdata;
        that.myChart.setOption(that.option);
      },
      showChart4()
      {
        var chartDom = document.getElementById('mychart');
         that.myChart = that.$echarts.init(chartDom);
         that.option.series[0].data=this.chartData;
        that.option.xAxis[0].data=['RP出线侧轴承音', 'RP摩擦音', 'RP主相电阻异常', 'RP耐压', 'RP漏洞', '合计'];
      that.option && that.myChart.setOption(that.option);
    }
  }

}

</script>
  
<style>
  
.chart_view
{
  background: #02384f;
    width: 100%;
    height: 100%;
  padding:2% ;
  text-align: center;

  border-style:solid;
  border-width: 1px;
  border-color: rgba(163, 175, 206, 0.5);
}
/*
  background: #07184b;
*/

.title{
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0px;
  color: white;
}
.chart-view-4{
  margin: 0px auto;
  width: 100%;
  height: 100%;
}
</style>
