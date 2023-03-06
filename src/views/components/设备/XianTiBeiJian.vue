<template>
    <div id="XianTiBeiJian">
        <Table border :columns="columns1" :data="data1" :row-class-name="rowClassName" highlight-row height="290" class="table">
        </Table>
    </div>
</template>
<script>
    export default {
        name:"XianTiBeiJian",
        props:{
            XTData: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                columns1: [
                    {
                        title: '日期',
                        key: '日期',
                        className: 'demo-table-info-column1',
                        width: 80
                    },
                    {
                        title: '压机号',
                        key: '压机号',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '牌号',
                        key: '牌号',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '产品规格',
                        key: '产品规格',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '工单编号',
                        key: '工单编号',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '订单编号',
                        key: '订单编号',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '计划数量',
                        key: '计划数量',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '完成数量',
                        key: '完成数量',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '计划数量(吨)',
                        key: 'plannumber',
                        className: 'demo-table-info-column'
                    }
                ],
                data1: [ 
                    {
				日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
				plannumber: 100,
                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
				plannumber: 100,

                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
				plannumber: 100,

                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
				plannumber: 100,

                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
				plannumber: 100,
	
                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
                plannumber: 100,

                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
                plannumber: 100,

                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
                plannumber: 100,

                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
                plannumber: 100,

                    },
                    {
                日期:'07/01',
				压机号:'1#',
				牌号:'Y35B',
				产品规格:'50*19.4*12.4',
				工单编号:'PLANOO1',
				订单编号:'DD001',
				计划数量:2700,
				完成数量:3250,
                plannumber: 100,

                    }
                ]
            }
        },
        watch:{
            XTData(newValue){
                let data=[]
                for (const newValueKey in newValue) {     
                    data.push(newValue[newValueKey])                      
                }    
                for (const Key in data[0]) {     
                    this.columns1.push({
                        title: Key,
                        key: Key,
                    })                
                }                
                if (this.data1.length==11) 
                {
                    this.data1.shift();
                }
                this.data1 = data        
            }
        },
        mounted(){

        },
        methods: {

            rowClassName (row, index) {
                if(index%2==0){
          return 'ivu-table-stripe-even';
        }
        else return 'ivu-table-stripe-odd';
            }
        }
    }
</script>
<style >
#XianTiBeiJian{


}
/*rgb(55, 109, 208);*/
.table{
    border-style: solid;
    border-width: 5px;
    border-color:rgba(21, 21, 23, 0.5);
    
}
.ivu-table td.demo-table-info-column1{
    width: 5%;
    font-size: 12px !important;
    font-weight: 150 !important;
        background-color: #2db7f5;
    }
.ivu-table td.demo-table-info-column{
    font-size: 12px !important;
    font-weight: 100 !important;

    }  
    /* color: aliceblue;*/
  .ivu-table th{
    background-color: #4181ea;
  
      font-size: 12px !important;
        font-weight: 350 !important;
        height: 75%;
    }

    .ivu-table td{
        height: 95%;
        font-size: 12px !important;
        font-weight: 200 !important;
    }

    /*偶数行*/
  .ivu-table-stripe-even td{
    background-color: #152f5a!important;
    height: 26px;
  }
  /*奇数行*/
  .ivu-table-stripe-odd td{
    background: #1b3662!important;
    height: 26px;
  }
/*选中某一行高亮*/
  .ivu-table-row-highlight td {
    background-color: #381010!important;
  }
  /*浮在某行*/
  .ivu-table-row-hover td {
    background-color: #4572ba!important;
  }

</style>
