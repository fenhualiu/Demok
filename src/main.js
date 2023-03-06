import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import i18n from './i18n'

// 将自动注册所有组件为全局组件
import './assets/common.less'

import * as echarts from "echarts"

import dataV from '@jiaminghi/data-view'

import 'iview/dist/styles/iview.css';
import iview from 'iview'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'//语言包
import ZN from './i18n/langs/zn'
import EN from './i18n/langs/en'
//import i18n1 from './i18n/index'
//import * as info from './i18n/index'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.config.devtools = true



Vue.use(ElementUI)
.use(dataV)
.use(iview)
.use(VueI18n)

// 自动设置多语言 默认选择浏览器系统语言
const navLang       = navigator.language;    //判断当前浏览器使用的语言
const localLang     = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
let lang            = localStorage.getItem('language') || localLang || 'en-US';    //如果有缓存，取缓存的语言

const i18n = new VueI18n({
  // 设置默认语言
  locale: 'en', // 语言标识
  // 添加多语言（每一个语言标示对应一个语言文件）
  messages: {
    'zh': 
      ZN
  , // 中文语言包
  'en': 
      EN
   // 英文语言包
}
})
//localStorage.setItem('language',lang);    //最后缓存当前使用的语言

new Vue({
  router,
  i18n,
  dataV,
  render: h => h(App)
}).$mount('#app')
export default {i18n}