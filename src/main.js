// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

// 引入全局css样式
import './assets/css/base.css'

// 引入mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import './lib/mui/fonts/mui.ttf'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 引入axios
import axios from 'axios'
// 给axios做配置
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.$http = axios

// 注册MintUI注册组件
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
