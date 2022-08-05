<template>
  <div class="app">
    <!--路由组件加载位置-->
    <router-view></router-view>
    <!--底部导航栏 $route指的是当前被加载的路由配置对象-->
    <Tabbar v-if="$route.meta.showTab"/>
  </div>
</template>

<script>
import Tabbar from'@/components/TabBar.vue'//运用自定义组件

export default {
  methods:{},
  /**
   * 注册组件
   */
  components:{
    Tabbar
  }
}
</script>

<style>

</style>