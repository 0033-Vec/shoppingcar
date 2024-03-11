<template>
  <div id="app">
    <!-- <Comp1></Comp1><br> <hr>
   <Comp2></Comp2> -->
    <!-- <Home></Home> -->
    <router-view></router-view>

    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"><router-link to="/Home">首页</router-link></van-tabbar-item>
      <van-tabbar-item icon="search"><router-link to="/News"></a>新闻资讯</router-link></van-tabbar-item>
      <van-tabbar-item icon="friends-o"><router-link to="/ShopCar">购物车</router-link></van-tabbar-item>
      <van-tabbar-item icon="setting-o"><router-link to="/Images">图片分享</router-link></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

  // import Comp1 from './Pages/01指令.vue'
  // import Comp2 from './Pages/02生命周期.vue'

  import Home from './Pages/Home/Index.vue'
  export default {
    name: 'App',
    //2.注册组件
    components: {
      // Comp1,Comp2
      // Home
    },
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style>
  .root {
    padding-bottom: 50px;
  }
</style>