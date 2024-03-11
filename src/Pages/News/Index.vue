<template>
   <div class="root">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="新闻资讯" left-text="返回" left-arrow @click-left="$router.go(-1)" />
      <!-- 新闻列表 -->
      <a v-for="(item,index) in newlist" :key="index" :href="item.link_url">
         <van-card :price="item.add_time | dataFormat" currency="" :desc="item.zhaiyao" :title="item.title"
            :thumb="item.img_url">
            <!-- 复写点击 -->
            <div slot="num">
               <span>点击：{{ item.click }}</span>
            </div>
         </van-card>
      </a>

   </div>
</template>

<script>

   export default {
      name: 'App',
      components: {},
      data() {
         return {
            newlist: [],
         }
      },
      methods: {
         getnewlist() {
            this.$axios.get('/api/getnewslist').then(res => {
               this.newlist = res.data.message
               // console.log(res.data.message);
            })
         }
      },
      //定义一个局部过滤器
      // filters: {
      //    dataFormat(value) {
      //       const date = new Date(value)
      //       return date.toISOString().slice(0, 19).replace('T', ' ')
      //    }
      // },
      mounted() {
         this.getnewlist()
      }
   }
</script>

<style>
   .van-nav-bar__title,
   .van-nav-bar__text,
   .van-nav-bar .van-icon-arrow-left {
      color: white !important;
   }
   
</style>