import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.css'
import Vant from'vant'//引入组件 所有
import 'vant/lib/index.css';
import '@/assets/iconfont/iconfont.css'
import  * as filters from'@/filter'//引入过滤器
import'@/api/mock'//导入Mock
import 'animate.css'//引入动画样式

Vue.use(Vant);//注册组件
Vue.config.productionTip = true
//引入所有过滤器
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
