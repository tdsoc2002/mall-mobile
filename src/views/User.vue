<template>
  <div>
   <!--头像-->
   <div class="user-header">
    <van-icon name="set" class="header-setting"/>
    <div class="user-avatar">
      <img :src="avatar"/>
      <div class="nickName">
        {{nickName}}
      </div>
    </div>
   </div>
   <!--我的订单-->
   <div>
    <van-cell title="我的订单" is-link value="全部订单"/>
    <van-grid :column-num="4">
                <van-grid-item icon="daifukuan" text="待付款" :badge="2"></van-grid-item>
                <van-grid-item icon="daifahuo" text="待发货" :badge="2"></van-grid-item>
                <van-grid-item icon="wuliu" text="待收货" :badge="2"></van-grid-item>
                <van-grid-item icon="shouhouguanli" text="已完成" :badge="2"></van-grid-item>
    </van-grid>
   </div>
  </div>
</template>

<script>
import avatar_default from '@/assets/images/avatar_default.png'
export default {
  data(){
    return{
      avatar:avatar_default,
      nickName:'mall'
    }
  }
}
</script>

<style>
.user-header{
  height: 130px;
  background-color: rgb(255, 0, 0);
}
.header-setting{
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      padding: 10px;
      font-size: 24px;
}
.user-avatar {
  text-align: center;
}
.user-avatar img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.nickName{
  color: white;
  padding-top: 10px;
}
</style>