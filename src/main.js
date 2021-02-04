import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
