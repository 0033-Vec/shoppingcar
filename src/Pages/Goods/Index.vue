<template>
   <div class="root">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="商品展示" left-text="返回" left-arrow @click-left="$router.go(-1)" />
      <!-- 购物车列表 -->

      <van-card v-for="(item,index) in goodslist" :key="index" :price="item.sell_price" currency="￥"
         :desc="item.zhaiyao" :title="item.title" :tag="item.click > 10 ? '热门' : ''" :thumb="item.img_url"
         :origin-price="item.market_price">
         <!-- 复写点击 -->
         <div slot="num">
            <span>x{{ item.stock_quantity }}</span>
         </div>
         <div slot="footer">
            <van-button size="mini" type="info">立即购买</van-button>
            <van-button size="mini" type="danger">加入购物车</van-button>
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
   .van-nav-bar__title,
   .van-nav-bar__text,
   .van-nav-bar .van-icon-arrow-left {
      color: white !important;
   }

   .van-card__price-currency,
   .van-card__price-integer {
      color: red !important;
   }
   .van-card-addtime{
      margin-top: 10px;
      font-size: 14px;
   }
</style>