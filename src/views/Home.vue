<template>
  <div class="home-style">
    <!--搜索框-->
    <van-search v-model="value" placeholder="搜索" />
    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(bn,index) in banner" :key="index">
          <img :src="bn.url" style="height:230px"/>
        </van-swipe-item>
    </van-swipe>
    <!--分类引导-->
    <van-grid :column-num="6">
      <van-grid-item v-for="(item,index) in channel" :key="index" :icon="item.iconUrl" :text="item.name" />
    </van-grid>
    <!--团购专区-->
    <van-cell title="团购专区" is-link value="更多内容" />
    <div>
      <!--变量名|过滤器-->
      <van-card
        v-for="(item,index) in grouponlist"
        :key="index"
        :price="item.grouponPrice|priceFormat"
        :origin-price="item.retailPrice|priceFormat"
        :desc="item.brief"
        :title="item.name"
        :thumb="item.picUrl">
          <template #tags>
            <van-tag plain type="primary">{{item.grouponMember}}人成团</van-tag>
            <van-tag plain type="danger">{{item.grouponDiscount}}元再减</van-tag>
          </template>
        </van-card>
    </div>
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
    ],
      channel:[
      {
        "id": 1005000,
        "name": "居家",
        "iconUrl": "http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
      },
      {
        "id": 1005001,
        "name": "餐厨",
        "iconUrl": "http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png"
      },
      {
        "id": 1005002,
        "name": "饮食",
        "iconUrl": "http://yanxuan.nosdn.127.net/c9280327a3fd2374c000f6bf52dff6eb.png"
      },
      {
        "id": 1008000,
        "name": "配件",
        "iconUrl": "http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png"
      },
      {
        "id": 1010000,
        "name": "服装",
        "iconUrl": "http://yanxuan.nosdn.127.net/28a685c96f91584e7e4876f1397767db.png"
      },
      {
        "id": 1011000,
        "name": "婴童",
        "iconUrl": "http://yanxuan.nosdn.127.net/1ba9967b8de1ac50fad21774a4494f5d.png"
      },
      {
        "id": 1012000,
        "name": "杂货",
        "iconUrl": "http://yanxuan.nosdn.127.net/c2a3d6349e72c35931fe3b5bcd0966be.png"
      },
      {
        "id": 1013001,
        "name": "洗护",
        "iconUrl": "http://yanxuan.nosdn.127.net/9fe068776b6b1fca13053d68e9c0a83f.png"
      },
      {
        "id": 1019000,
        "name": "志趣",
        "iconUrl": "http://yanxuan.nosdn.127.net/7093cfecb9dde1dd3eaf459623df4071.png"
      }
    ],
    grouponlist: [
    {
      "id": 1109008,
      "name": "云端沙发组合",
      "brief": "MUJI供应商携手打造",
      "picUrl": "http://yanxuan.nosdn.127.net/c5be2604c0e4186a4e7079feeb742cee.png",
      "counterPrice": 4019,
      "retailPrice": 3999,
      "grouponPrice": 3199,
      "grouponDiscount": 800,
      "grouponMember": 15,
      "expireTime": "2022-01-31 00:00:00"
    },
    {
      "id": 1110016,
      "name": "天然硅胶宠物除毛按摩刷",
      "brief": "顺滑平面，猫狗通用，去除死毛",
      "picUrl": "http://yanxuan.nosdn.127.net/3bd73b7279a83d1cbb50c0e45778e6d6.png",
      "counterPrice": 59,
      "retailPrice": 39,
      "grouponPrice": 29,
      "grouponDiscount": 10,
      "grouponMember": 12,
      "expireTime": "2022-01-31 00:00:00"
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
  .home-style{
    padding-bottom: 50px;
  }
</style>