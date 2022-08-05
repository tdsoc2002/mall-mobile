<template>
  <div>
    <van-search placeholder="搜索" @click="toSearch"/>
  </div>
</template>

<script>
export default {
    methods:{
        toSearch(){
            this.$router.push("/search")
        }
    }
}
</script>

<style>

</style>