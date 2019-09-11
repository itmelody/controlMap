import Vue from 'vue'
import iconSvg from './cg-icon/cg-icon-svg/index'
import cgContainer from './cg-container'
import contentTab from './content-tab/index'
import photoShow from './photo-show/index'
//!注意 有些组件使用异步加载会有影响
Vue.component('cg-container', cgContainer)
Vue.component('cg-icon-svg', iconSvg)
Vue.component('content-tabs', contentTab)
Vue.component('photo-show', photoShow)
