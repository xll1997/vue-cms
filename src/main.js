// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

// 引入mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import './lib/mui/fonts/mui.ttf'
import './lib/mui/fonts/mui-icons-extra.ttf'

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
