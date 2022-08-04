import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Cart from '@/views/Cart'
import User from '@/views/User'
import Category from '@/views/Category'
Vue.use(VueRouter)

const routes = [
{
  path:"/",//访问的路径
  redirect:"/home"//重定向访问
},
{
  name:"home",//路由的名字
  path:"/home",//访问的路径
  component:Home//访问的组件
},
{
  name:"cart",//路由的名字
  path:"/cart",//访问的路径
  component:Cart//访问的组件
},
{
  name:"user",//路由的名字
  path:"/user",//访问的路径
  component:User//访问的组件
},
{
  name:"category",//路由的名字
  path:"/category",//访问的路径
  component:Category//访问的组件
},
]

const router = new VueRouter({
  routes
})

export default router
