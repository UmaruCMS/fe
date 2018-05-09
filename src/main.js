import Vue from 'vue';
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'normalize.css/normalize.css'

import router from '@/router'
import store from '@/store'

import App from './App.vue'
import '@/assets/styles/common.css'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  'render': (h) => h(App),
  router,
  store
}).$mount('#app')
