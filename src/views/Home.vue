<template>
  <div>
    <van-search v-model="value" placeholder="搜索" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(bn,index) in banner" :key="index">
          <img :src="bn.url" style="height:230px"/>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {getHome} from'@/api/api.js'

export default {
  data() {
    return {
      value: '',
      banner:[
      {
        "id": 1,
        "name": "合作 谁是你的菜",
        "link": "",
        "url": "http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg",
        "position": 1,
        "content": "合作 谁是你的菜",
        "enabled": true,
        "addTime": "2018-02-01 00:00:00",
        "updateTime": "2018-02-01 00:00:00",
        "deleted": false
      },
      {
        "id": 2,
        "name": "活动 美食节",
        "link": "",
        "url": "http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg",
        "position": 1,
        "content": "活动 美食节",
        "enabled": true,
        "addTime": "2018-02-01 00:00:00",
        "updateTime": "2018-02-01 00:00:00",
        "deleted": false
      },
      {
        "id": 3,
        "name": "活动 母亲节",
        "link": "",
        "url": "http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg",
        "position": 1,
        "content": "活动 母亲节5",
        "enabled": true,
        "addTime": "2018-02-01 00:00:00",
        "updateTime": "2018-02-01 00:00:00",
        "deleted": false
      }
    ]
    };
  },
  created(){
    //发送请求，获取首页数据
    getHome().then(resp=>{
      console.info(resp)
    })
  }
};
</script>

<style>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>