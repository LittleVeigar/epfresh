// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
import store from './store/'
import FastClick from 'fastclick'
import 'alloytouch/alloy_touch'
import 'alloytouch/transformjs/transform'
import vueAlloyTouch from 'alloytouch/vue/alloy_touch.vue'
Vue.use(vueAlloyTouch)
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
import lodash from 'lodash'
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })
Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
