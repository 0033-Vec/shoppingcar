<template>
   <div class="root">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="$router.go(-1)" />
      <!-- 购物车列表 -->
      <van-card v-for="(item,index) in goodslist" :key="index" :price="item.sell_price" currency="￥"
         :desc="item.zhaiyao" :title="item.title" :tag="item.click > 10 ? '热门' : ''" :thumb="item.img_url"
         :origin-price="item.market_price">
         <!-- 复写点击 -->
         <div slot="num">
            <span>x{{ item.stock_quantity }}</span>
         </div>
         <div slot="footer">
            <van-button size="small" type="info">立即购买</van-button>
         </div>
         <div slot="tags" class="van-card-addtime">
            <span>{{item.add_time | dataFormat}}</span>
         </div>
      </van-card>

   </div>
</template>

<script>

   export default {
      name: 'App',
      components: {},
      data() {
         return {
            goodslist: [],
         }
      },
      methods: {
         getgoodslist() {
            this.$axios.get('/api/getgoods')
               .then(res => {
                  this.goodslist = res.data.message
                  // console.log(res.data.message);
               })
         }
      },
      mounted() {
         this.getgoodslist()
      }
   }
</script>

<style>
   .van-nav-bar__content {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      background-color: #1989fa;
   }

   .root {
      padding-top: 46px;
   }

   .van-nav-bar__title,
   .van-nav-bar__text,
   .van-nav-bar .van-icon-arrow-left {
      color: white !important;
   }

   .van-card__price-currency,
   .van-card__price-integer {
      color: red !important;
   }

   .van-card-addtime {
      margin-top: 10px;
      font-size: 14px;
   }

   .van-submit-bar {
      margin-bottom: 50px;
      border-bottom: 1px solid #eee;
   }
</style>