<template>
  <div class="layOut" >
    <el-container>
      <el-header>
        <div >
          <head-top></head-top>
        </div>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <asile-left></asile-left>
        </el-aside>
        <el-main  style="height:100%;flex-grow:1;">
          <main-con ></main-con>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headTop from "@/views/layOut/pages/headTop.vue";
import asileLeft from "@/views/layOut/pages/asileLeft.vue";
import mainCon from "@/views/layOut/pages/mainCon.vue";
import lang from "./Lang.vue";
export default {
  name: "layOut",
  components: {
    headTop,
    asileLeft,
    mainCon,
    lang
  },
};
</script>

<style lang='less' scoped>

/deep/ .el-header{
  height:100px;
   width:100%;
   //background: #3f5768;
   padding: 0px;
}
/deep/ .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
//  background-color:rgba(6, 30, 93, 0.5);
/deep/ .el-aside {
  background-color:#051C58;
  color: rgb(237, 218, 218);
  text-align: left;
  line-height: calc(100vh - 65px);
  width: 120px !important;
}

/deep/ .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  margin: 0 !important;
  padding: 0 !important;
  //line-height: calc(100vh - 65px);
}

/deep/.el-container {
  margin-bottom: 0px;
  background-color: rgba(6, 30, 93, 0.5);
 background-image: url('../img/bg.png');
}

/deep/ .el-container:nth-child(5) .el-aside,
/deep/ .el-container:nth-child(6) .el-aside {
  line-height: 60px;
}

/deep/ .el-container:nth-child(7) .el-aside {
  line-height: 20px;
}

</style>
