import './config'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from '@/plugins/i18n'

import './registerServiceWorker'
import './plugins'
import './components'

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  ...App
})
