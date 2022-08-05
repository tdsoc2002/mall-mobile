<template>
  <div>
    <!--顶部编辑栏-->
    <div class="cart-header">
      <van-icon name="editor"></van-icon>
      <span>编辑</span>
    </div>
    <!--购物车商品列表-->
    <div>
      <van-checkbox-group>
        <van-swipe-cell>
          <!--自定义显示内容-->
          <div>
            <van-checkbox></van-checkbox>
            <van-card></van-card>
          </div>
          <!--右侧划出内容-->
           <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

  </div>
</template>

<script>
export default {
//TODO 未完成
}
</script>

<style>
.cart-header{
  text-align: right;
  height: 46px;
  line-height: 46px;
  margin-right: 10px;
}
.delete-button {
    height: 100%;
  }
</style>