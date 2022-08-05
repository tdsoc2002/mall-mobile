import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Cart from '@/views/Cart'
import User from '@/views/User'
import Category from '@/views/Category'
import Search from '@/views/Search'
Vue.use(VueRouter)

const routes = [
{
  path:"/",//访问的路径
  redirect:"/home",//重定向访问
  meta:{//源信息
    showTab:true//决定底部的tab是否出现
  }
},
{
  name:"home",//路由的名字
  path:"/home",//访问的路径
  component:Home,//访问的组件
  meta:{
    showTab:true
  }
},
{
  name:"cart",//路由的名字
  path:"/cart",//访问的路径
  component:Cart,//访问的组件
  meta:{
    showTab:true
  }
},
{
  name:"user",//路由的名字
  path:"/user",//访问的路径
  component:User,//访问的组件
  meta:{
    showTab:true
  }
},
{
  name:"category",//路由的名字
  path:"/category",//访问的路径
  component:Category,//访问的组件
  meta:{
    showTab:true
  }
},
{
  name:"search",//路由的名字
  path:"/search",//访问的路径
  component:Search,//访问的组件
  meta:{
    showTab:false
  }
},
]

const router = new VueRouter({
  routes
})

export default router
