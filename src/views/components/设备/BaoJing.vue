<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  props: {
    BJscrollData: {
      type: Array,
      default: () => []
    }
  },
  watch:{
    BJscrollData (newValue) {
      this.createConfig(newValue)
    }
  },
  data () {
    return {
      config: {
        header: ['时间', '病害信息', '数量', '标段'],
        data: [
          ['2019-07-01 19:25:00', '路面危害-松散', '5', 'xxxxxxx'],
          ['2019-07-02 17:25:00', '路面危害-路面油污清理', '13', 'xxxxxxx'],
          ['2019-07-03 16:25:00', '交安设施-交通标志牌结构', '6', 'xxxxxxx'],
          ['2019-07-04 15:25:00', '路基危害-防尘网', '2', 'xxxxxxx'],
          ['2019-07-05 14:25:00', '交安设施-交通标志牌结构', '1', 'xxxxxxx'],
          ['2019-07-06 13:25:00', '路面危害-松散', '3', 'xxxxxxx'],
          ['2019-07-07 12:25:00', '路基危害-防尘网', '4', 'xxxxxxx'],
          ['2019-07-08 11:25:00', '路面危害-路面油污清理', '2', 'xxxxxxx'],
          ['2019-07-09 10:25:00', '交安设施-交通标志牌结构', '5', 'xxxxxxx'],
          ['2019-07-10 09:25:00', '路基危害-防尘网', '3', 'xxxxxxx']
        ],
        index: true,
        columnWidth: [50, 170, 300],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  },
  methods:{
    createConfig (newData) {
      let config = {
        header: ['报警站位', '报警信息', '开始时间', '持续时间'],
        data: [
          // ['2019-07-01 19:25:00', '上料报警', '5', 'xxxxxxx']
        ],
        index: true,
        columnWidth: [43, 170, 200, 150],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
      let data = newData || []
      if (Array.isArray(data)) 
      {
        if (data.length > 0) {
          let firstData = data[0]
          let header = Object.keys(firstData)
          config.header = header
          // this.$set(this.config, 'header', header)
        }
        let dataArray = []
    
        for (const item of data) {
          dataArray.push(Object.values(item))
        }
        config.data = dataArray
        //   this.$set(this.config, 'data', dataArray)
      } 
      else 
      {
        config.data = []
      }
      this.config = config
    }
  },
  mounted(){

  }
}
</script>

<style lang="less">
#scroll-board {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
</style>
