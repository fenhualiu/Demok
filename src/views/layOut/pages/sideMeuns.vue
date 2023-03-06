<template>
  <div class="">
    <!-- 遍历路由表，生成左侧菜单 -->
    <div v-for="(item, index) in meuns" :key="index">
      <template v-if="!item.hidden">
        <!-- 一级菜单的情况 -->
        <template v-if="item.children && item.children.length === 1">
          <router-link :to="item.path + '/' + item.children[0].path">
            <!--           index跟浏览器地址对应，这样菜单才能显示选中状态  -->
            <el-menu-item :index="item.path + '/' + item.children[0].path">
              <template slot="title">
                <!-- 设置icon -->
                <i
                  v-if="item.children[0].meta.icon"
                  :class="item.children[0].meta.icon"
                ></i>
                <!-- 菜单名称 -->
                {{ item.children[0].meta.title }}
              </template>
            </el-menu-item>
          </router-link>
        </template>
        <!-- 一级菜单的情况 end-->
        <!-- 多级菜单 -->
    
        <!-- 多级菜单 end-->
      </template>
    </div>
  </div>
</template>
<script>
let that;
export default {
  name: "sideMeuns",
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      meuns: "",
      metatitle:[],
      switch:"",
    };
  },
  watch:{
    menuList: {
          handler(newName, oldName) 
          {   
            //newName是改变后的值，oldName是初始的值
            //当我们在在输入框中输入数据视图改变obj.a的值时，我们发现是无效的
            //所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的
            //我们只有给obj赋值的时候它才会监听到，比如我们在 created事件钩子函数中对obj进行重新赋值：
            console.log('这是个demo');
            this.convert();
          },
          immediate: true,
        }
      },
  methods: {
    convert(){
      let i=1;
      this.metatitle[0]=this.$i18n.tc('language.Overview')//this.$i18n.tc('message.hello')            
      this.metatitle[1]=this.$i18n.tc('language.Quality')            
      this.metatitle[2]=this.$i18n.tc('language.Device')            
      this.metatitle[3]=this.$i18n.tc('language.Process')           
      this.metatitle[4]=this.$i18n.tc('language.Security')
      for(let num in this.meuns){
        if(i!=6){
          this.meuns[i].children[0].meta.title= this.metatitle[num];
          //metatitle.push(this.meuns[i].children[0].meta.title);
       // alert(num)
        i++;
        }
      }
      console.log("输出：metatitle")
      alert(this.metatitle);
    }
  },
  created:function(){
    this.switch=this.$i18n.tc('language.switch')
    that=this
  },
  mounted() {
    this.meuns = this.menuList;
   //this.switch= this.meuns = this.menuList;
   this.convert();
    console.log("哈喽----"+this.meuns);
    console.log(this.meuns);
  },
}
</script>