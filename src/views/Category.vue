<template>
  <div>
    <!--搜索框-->
    <SearchBar/>
    <!--左侧边栏 @监听事件-->
    <van-sidebar class="fl" style="height:100%" @change="sidebarChange" v-model="index">
      <van-sidebar-item v-for="(item,index) in categoryInfos.categoryList" :key="index" :title="item.name" />
    </van-sidebar>
    <!--右侧边栏-->
    <div class="right-content">
      <div class="right-top">
        <img :src="categoryInfos.currentCategory.picUrl" style="width:300px"/>
        <p class="desc">{{categoryInfos.currentCategory.desc}}</p>
      </div>
    <!--子导航栏-->
    <van-grid column-num="3">
      <van-grid-item v-for="(item,index) in categoryInfos.currentSubCategory" :key="index">
          <img :src="item.picUrl" style="width:70px"/>
          <p class="desc">{{item.name}}</p>
      </van-grid-item>
    </van-grid>
    </div>
  </div>
</template>

<script>
import {getCategory} from '@/api/api'
//引用组件
import SearchBar from '@/components/SearchBar.vue'

export default {
  data(){
    return{
      value:'',
      index:0,
      categoryInfos:{
        currentCategory:{},
        categoryList:{},
        currentSubCategory:[]
      }
    }
  },
  created(){
      getCategory().then(resp=>{
        console.log(resp.data.data)
        this.categoryInfos=resp.data.data
      })
  },
  methods:{
    sidebarChange(index){
        console.info(index)
        this.index=index
    }
  },
  components:{
    SearchBar
  }
}
</script>

<style>
  .right-content{
    margin-left: 80px;
  }

  .right-top{
    text-align: center;
  }

  .desc{
    margin-top: 10px;
  }
</style>