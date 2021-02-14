import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.baseURL = '/api'
// 超时时间
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  const path = location.hash
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login'
    } else {
      alert(res.msg)
    }
  }
})

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
