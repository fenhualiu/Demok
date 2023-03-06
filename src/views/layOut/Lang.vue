<template>
   <div class="langue">
  <!--
    <ul >  
        <li> <div class="h11"> {{$t('language.language')}}</div></li>  
        <li><button    @click="changeEng"  background="#051C58">{{$t('language.en')}}</button> </li>  
        <li><button  @click="changeZh"  >{{$t('language.zh')}}</button></li>  
    </ul>   -->
    <el-row :gutter="10" >
  <el-col :span="10"  :push="8" class="h11">  
    <div > {{$t('language.language')}}</div>
    </el-col>
  <el-col :span="5" :offset="1" :push="13"  >   
    <el-button plain   @click="changeEng"  background="#051C58">{{$t('language.en')}}
      </el-button> 
  </el-col>
  <el-col :span="5" :offset="0" :push="24" >
    <el-button  @click="changeZh"  >{{$t('language.zh')}}</el-button>
  </el-col>
</el-row>
</div>
</template>

<script>
    export default {
      ffr:"",
        date() {
        return {
          mtt:[],
        }
    },
    methods:{
        // 选择英语
        changeEng(){
            this.$i18n.locale= 'en',
            localStorage.setItem('languageSet',this.$i18n.locale)   //将用户设置存储到localStorage以便用户下次打开时使用此设置
            // this.mtt[0]=this.$i18n.tc('language.Overview')//this.$i18n.tc('message.hello')
            // this.mtt[1]=this.$i18n.tc('language.Quality')
            // this.mtt[2]=this.$i18n.tc('language.Device')
            // this.mtt[3]=this.$i18n.tc('language.Process')
            // this.mtt[4]=this.$i18n.tc('language.Security')
            // console.log(mtt);
        },
        // 选择中文
        changeZh(){
            this.$i18n.locale='zh',
            localStorage.setItem('languageSet',this.$i18n.locale)   //将用户设置存储到localStorage以便用户下次打开时使用此设置
          
        }
    }       
    }
</script>
<style scoped>
.langue{
    width: 100px;
    background: #071D46;
    margin-left: 150px;
}
.el-button{
  background:#051C58;
}
ul li {  
        display: inline-block;  
    }  

    li button {  
        display: inline-block;  
        color: rgb(60, 52, 52);  
        text-align: center;  
        padding: 16px;  
        text-decoration: none;  
    }  
.h11{
  text-align: center;  
  margin-top: 5px;
  width: 56px;
    font-size: 18px;
    font-weight: 200;
  writing-mode: horizontal-tb;
}
</style>
