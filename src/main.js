import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import Vant from'vant'//引入组件 所有
import 'vant/lib/index.css';
import '@/assets/iconfont/iconfont.css'

import '@/api/mock'//导入Mock

Vue.use(Vant);//注册组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
