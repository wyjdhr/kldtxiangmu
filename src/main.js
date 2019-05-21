import Vue from 'vue'
import App from './App'
import router from './router'
import './commone/common.css'
import './commone/rem.js'
import store from './store/index.js'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})