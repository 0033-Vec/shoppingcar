<template>
    <div class="root">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="首页" />
        <!-- 轮播图 -->
        <!-- 先静态后动态 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in imglist" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </van-swipe-item>
        </van-swipe>
        <!-- 新闻资讯循环广播 -->
        <a v-if="newslist[0]" :href="newslist[index].link_url">
            <van-notice-bar :text="newslist[index].title" left-icon="volume-o" />
        </a>
        <!-- 九宫格导航 -->
        <van-row gutter="20">
            <van-col span="8"><router-link to="/News/"><img src="../../assets/menu3.png" alt=""></router-link></van-col>
            <van-col span="8"><router-link to="/Images/"><img src="../../assets/menu4.png" alt=""></router-link></van-col>
            <van-col span="8"><router-link to="/Goods/"><img src="../../assets/menu5.png" alt=""></router-link></van-col>
        </van-row>
        <van-row gutter="20">
            <van-col span="8"><router-link to="/Comments/"><img src="../../assets/menu6.png" alt=""></router-link></van-col>
            <van-col span="8"><router-link to="/SearchNews/"><img src="../../assets/menu9.png" alt=""></router-link></van-col>
            <van-col span="8"><router-link to="/Contact/"><img src="../../assets/menu10.png" alt=""></router-link></van-col>
        </van-row>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                imglist: [],
                newslist: [], //定义新闻数组
                index: 0, //定义数组下标
                intervalHandel: null, //设置定时器为空
            }
        },
        methods: {
            getlunbo() {
                this.$axios.get('/api/getlunbo').then(res => {
                    this.imglist = res.data.message
                    // console.log(res.data.message)
                })
            },
            getnewslist() {
                this.$axios.get('/api/getnewslist').then(res => {
                    this.newslist = res.data.message
                    console.log(res.data.message)
                })
                this.intervalHandel = setInterval(() => {
                    this.index++
                    if (this.index >= 13) {
                        this.index = 0
                    }
                }, 3000)
            },

        },
        mounted() {
            this.getlunbo()
            this.getnewslist()
        },
        beforeDestory() {
            clearInterval(this.intervalHandel)
        }
    }
</script>

<style>
    /* 覆盖导航栏的背景颜色 */
    .van-nav-bar {
        background-color: #0094ff !important;
    }

    .van-nav-bar__title {
        color: white !important;
    }

    /* 设置轮播图大小 */
    .van-swipe {
        height: 200px;
        /* background-color: pink; */
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>