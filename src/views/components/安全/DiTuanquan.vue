<template>
    <div id="DiTuanquan">
        <Row type="flex" justify="start" >
            <Col span="14">
               <div class="anquanditu"></div>
            </Col>
            <Col span="10">
            <div class="anquanhongxian">
                {{$t('language.Safety.Security_TenRedlines')}}
            </div>
            <div class="hongxianneirong" align="left" v-for="item in $t('language.Safety.Security_RedlinesContext')">
                {{item}}<br>
            </div>
            </col>
        </Row>

    </div>
</template>
<script>
export default {
    name:"DiTuanquan",
    data(){
        return{

        };
    },
    components:{}
}
</script>
<style>
#DiTuanquan{

}

  .anquanditu {
    background-image: url('img/640.png');
    background-size: cover; 
    margin-top:0px ;
height: 100%;
width: 100%;
    }
.anquanhongxian{
    color:deeppink;
    font-size:30px;
    font-weight:500;
    
      border-bottom: 1px solid rgb(235, 236, 238);

}
.hongxianneirong{
    color:rgb(223, 213, 218);
    font-size:20px;
    font-weight:300;
}
</style>