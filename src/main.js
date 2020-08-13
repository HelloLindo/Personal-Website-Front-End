import '@/utils/rem'
import '@/assets/css/base.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/assets/theme/index.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import ajax from '@/utils/ajax'
import '@/assets/svg/iconfont.js'
import '@/assets/svg/iconfont.css'
import '@/global/components'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = true
// Vue.config.devtools = ENV === 'dev'

Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
  console.warn(msg, vm, trace)
}

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.warn(err, vm, info)
}

Vue.use(ElementUI, { locale })

Vue.use(VueGtag, {
  config: { id: 'UA-175251058-1' }
})

// Global methods
Vue.prototype.$ajax = ajax

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
