<template>
  <div id="top-header">
    <!-- <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" /> -->
    <div class="center-title">
      <el-row :gutter="8" type="flex"  justify="end">
        <el-col :span="15" :offset="0"><div >{{$t('language.Title')}}</div></el-col>
        <el-col :span="3" :pull="1" class="words" type="flex"  justify="end" >
         <div><lang/></div>
        </el-col>
    </el-row>                                                                                                                                                                                                           
      </div>
     
  </div>
</template>

<script>
import lang from "../Lang.vue";
export default {
  name: 'TopHeader',
  components: {
    lang
  },
}
</script>

<style lang="less">
#top-header {
  position: relative;
  display: flex;
  margin: 0px;
  justify-content: space-between;
  flex-shrink: 0;
  //background: #3f5768;
  height: 10%;

.words{
   //margin-left: 30px;
   //left: 50px;
}

  .header-center-decoration {
    width: 40%;
    height: 35px;
    margin-top: 30px;
  }

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 45px;
  }

  .center-title {
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    color: aliceblue;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
}
</style>
