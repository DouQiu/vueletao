<template>
    <div class="app_container">
        <!-- 头部 -->
        <div class="header">
            <img src="./assets/images/logo.png" alt="">
            <Search placeholder="请输入搜索关键词"></Search>
        </div>
        <!-- 中间部分 -->
        <router-view></router-view>
        <!-- 底部 -->
        <van-tabbar v-model="active">
          <van-tabbar-itme to="/home" icon="wap-home-o">首页</van-tabbar-itme>
          <van-tabbar-itme to="/mycar" icon="cart-o" badge="20">购物车</van-tabbar-itme>
          <van-tabbar-itme to="/user" icon="user-o" >我的乐淘</van-tabbar-itme>
        </van-tabbar>

    </div>
</template>

<script>
import { Search,Tabbar,TabbarItem } from 'vant'
export default {
    data(){
      return{
        active:0
      }
    },
    components:{
        Search,
        "van-tabbar":Tabbar,
        "van-tabbar-itme":TabbarItem
    }
}
</script>

<style lang="scss" scoped>
    .app_container{
        min-width: 320px;
        max-width: 750px;
        margin: 0 auto;
        // background-color: skyblue;
        .header{
          display: flex;
          justify-content: center;
          align-content: center;
          padding: 2px;

          img{
            height: 45px;
          }

          .van-search{
            flex: 1;
          }
        }
    }

</style>
