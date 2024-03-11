<template>
    <div class="root">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="图片列表" left-text="返回" left-arrow @click-left="$router.go(-1)" />
        <van-tabs type="card" @click="tabClick">
            <van-tab v-for="item in clist" :key="item.id" :title="item.title"></van-tab>
        </van-tabs>
        <!-- 3.图片列表显示 -->
        <div class="nodata" v-show="cimages.length<=0">
            当前分类下没有图片数据
        </div>
        <router-link v-for="item in cimages" :key="item.id" :to="'/ImageInfo/' + item.id">
            <div class="imglist">
                <img :src="item.img_url" alt="">
                <div class="info">
                    <h2>{{ item.title}}</h2>
                    <p>{{ item.zhaiyao}}</p>
                </div>
            </div>
        </router-link>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                clist: [],
                cimages: []
            }
        },
        methods: {
            tabClick(index, title) {
                //根据当前点击tab标签的index获取this.clist对应数据的id即可
                let cateid = this.clist[index].id;
                this.getImagelist(cateid);//获取当前用户点击的标签分类下的图片列表
            },
            getImagelist(cateid) {
                this.$axios.get('/api/getimages/' + cateid).then(res => {
                    this.cimages = res.data.message;
                })
            },
            getClist() {
                this.$axios.get('/api/getimgcategory').then(res => {
                    let list = res.data.message

                    list.unshift({ title: '全部', id: 0 })
                    this.clist = list
                })
            }
        },
        mounted() {
            this.getClist()
            this.getImagelist(0)
        }
    }
</script>

<style>
    .van-tabs__nav--card {
        margin: 0;
    }

    .imglist img {
        height: 300px;
    }

    .imglist {
        position: relative;
    }

    .imglist .info {
        position: absolute;
        bottom: 5px;
        left: 5px;
        color: aliceblue;
    }

    .imglist .info p,
    h2 {
        font-size: 14px;
    }
</style>