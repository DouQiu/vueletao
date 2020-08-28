<template>
  <div class="home_container">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" :indicator-color="color">
      <van-swipe-item v-for="item in lunboData">

      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant'
  export default {
    swipe,
    "van-swipe":Swipe,
    "van-swipe-item":SwipeItem
  }
</script>

<style lang="scss" scoped>

</style>
