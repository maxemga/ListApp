// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App'
import router from './router'
import store from './store'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import '@/assets/styles/style.css'

Vue.config.productionTip = false
Vue.use(Notifications)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, PulseLoader },
  template: '<App/>',
})
