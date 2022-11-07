import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 lib-flexible
import 'amfe-flexible'

// 引入 vant
// import Vant from 'vant'
// import 'vant/lib/index.css'

// 将 vant 注册为 Vue 插件
// Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
