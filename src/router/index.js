import Vue from "vue";
import VueRouter from "vue-router";
import layOut from '../views/layOut/layOut.vue';     //一二级菜单容器
import {ffr} from '../views/layOut/Lang.vue';
Vue.use(VueRouter);

/**
 * hidden:   控制(判断)该路由菜单的显隐(需要不显示的路由配置该项为true即可)
 * meta.title:   菜单名称
 * meta.icon:    菜单图标
 * path:   路由路径(最后一层不需加/)
 * redirect: 重定向
 */
var fff=new Vue()
const routes = [
  {
    path: "/",
    redirect: 'home',  //重定向到首页
    hidden: true
  },
  {
    path: '',
    name: '',
    component: layOut,
    children: [{
      path: 'home',
      name: 'home',
      meta: {
        title:'总览',
        icon: 'el-icon-menu'
      },
      component: () => import('@/views/Home.vue'),
    }]
  },
  {
    path: '/one',
    name: 'one',
    // meta: {
    //   title: "一级单个",
    //   icon: "el-icon-goods",
    // },
    component: layOut,
    children: [{
      path: 'oone',
      name: 'oone',
      meta: {
        title: '品质',
        icon: 'el-icon-setting'
      },
      component: () => import('@/views/components/品质/index.vue')
    }]
  },
  {
    path: '/two',
    name: 'test',
    meta: {
      title: "二级下单个",
      icon: "el-icon-safe",
    },
    component: layOut,
    children: [{
      path: 'tone',
      name: 'tone',
      meta: {
        title:'设备',
        icon: 'el-icon-upload'
      },
      hidden: true, 
      component: () => import('@/views/components/设备/index.vue')
    }]
  },
  {
    path: '/twomore',
    name: 'twomore',
    meta: {
      title: "二级下多个",
      icon: "el-icon-info",
    },
    component: layOut,
    children: [{
      path: 'twomore1',
      name: 'twomore1',
      meta: {
        title:'工艺',
        icon: 'el-icon-service'
      },
      component: () => import('@/views/components/工艺/index.vue')
    
  }]
  },
  {
    path: '/threemore',
    name: 'threemore1',
    meta: {
      title: "三级下多个",
      icon: "el-icon-goods",
    },
    component: layOut,
    children: [{
      path: 'index',
      name: 'index',
      meta: {
        title: '安全',
        icon: 'el-icon-info'
      },
      component: () => import('@/views/components/安全/index.vue')
  }]
  }
];

const router = new VueRouter({
  routes
});

export default router;
