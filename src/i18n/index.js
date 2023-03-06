
import VueI18n from 'vue-i18n'//语言包
import ZN from './langs/zn'
import EN from './langs/en'

// 自动设置多语言 默认选择浏览器系统语言
const navLang       = navigator.language;    //判断当前浏览器使用的语言
const localLang     = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
let lang            = localStorage.getItem('language') || localLang || 'en-US';    //如果有缓存，取缓存的语言
const i18n          = new VueI18n({
    locale: lang,
    messages:{
        'zh':ZN, // 中文语言包
        'en': EN // 英文语言包
    },
    silentTranslationWarn: true
});
localStorage.setItem('language',lang);    //最后缓存当前使用的语言
export default {i18n};