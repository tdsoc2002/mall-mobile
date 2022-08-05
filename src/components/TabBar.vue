<template>
  <div>
    <van-tabbar route active-color="#f00000">
    <van-tabbar-item v-for="(tab,index) in tabs" :key="index" :icon="tab.icon" :to="tab.path">{{tab.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'MallMobileTabbar',
    data(){
        return{
            tabs:[
                 {
                    name: '精选',
                    path: '/home',
                    pathName: 'home',
                    icon: 'compass-full',
                    dot: false
                    },
                    {
                    name: '分类',
                    path: '/category',
                    pathName: 'class',
                    icon: 'class-full',
                    dot: false
                    },
                    {
                    name: '购物车',
                    path: '/cart',
                    pathName: 'cart',
                    icon: 'cart-full',
                    dot: false
                    },
                    {
                    name: '我的',
                    path: '/user',
                    pathName: 'user',
                    icon: 'wode',
                    dot: false
                    }
            ]
        }
    }

}
</script>

<style>

</style>
