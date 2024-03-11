<template>
    <div id="app">
        <h2>0.插值表达式：v-text 或 v-html</h2>
        <hr>
        {{ msg }} <br>
        <span v-text="msg"></span><br>
        <span v-html="msg"></span>

        <hr>
        <h2>1.v-bind指令</h2>
        v-bind指令:作用是可以给标签属性来进行数据绑定<br>
        <img v-bind:src="url" alt=""><br>
        <h2>2.v-bind指令简写:</h2>
        v-bind简写就是在元素属性前加上冒号<br>
        <img :src="url" alt=""><br>
        <hr>
        <h2>3.点击事件</h2>
        vue中使用v-on或者@来注册事件<br>
        <button @click="mouseenter">点击切换图片</button>
        <hr>
        <h2>4.v-module</h2>
        <!-- 作用：给表单元素使用的，双向数据绑定的能力，我们可以快速的【设置】或【获取】表单的值 -->
        用户：<input type="text" v-module="username"><br>
        <button @click="login">登录</button>
        <button @click="reset">重置</button>
        <hr>
        <h2>5.axios进行ajax请求数据</h2>
        使用步骤：<br>
        1.npm i axios 后在需要的.vue中使用就需要import导入<br>
        2.import axios from 'axios'<br>
        3.查看官方文档里面的get请求和post请求<br>
        【1】Get请求写法：axios.get(url).then(res=>{服务器返回的数据})
        <hr>
        <h2>6.vue中的生命周期</h2>
        钩子函数，就是vue自己定义好的，会按照固定的顺序自动执行<br>
        mounted会在页面挂在完成后，自动执行，所以我们可以在这个函数中发ajax请求<br>
        <hr>
        <h2>7.vue项目中集成vant组件</h2>
        使用步骤：<br>
        1.npm i vant@latest-v2<br>
        2.在项目中main.js中增加如下代码：<br>
        <p>
            import Vant from 'vant';
            import 'vant/lib/index.css';
        </p>
        3.根据vant的官方文档直接迁移代码即可使用<br>
        <div>
            <van-button type="default">默认按钮</van-button><br>
            <van-button type="primary">主要按钮</van-button><br>
            <van-button type="info">信息按钮</van-button><br>
            <van-button type="warning">警告按钮</van-button><br>
            <van-button type="danger" @click="mouseenter">危险按钮</van-button>
        </div>
        <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
        <div class="swipe">
            <van-swipe :autoplay="3000" indicator-color="white" :height="100">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                msg: '<h2>你好，Vec</h2>',
                url: 'http://bd.xitong18.com/style/images/tmall.png',
                username: ''
            }
        },
        methods: {
            getlist() {
                console.log('方法是写在methods中的')
            },
            mouseenter() {
                //改变url变量的值
                this.url = 'http://bd.xitong18.com/style/images/atb.png'
            },
            login() {
                console.log(this.username)
            },
            reset() {
                this.username = ''
            }
        },
        //钩子函数，就是vue自己定义好的，会按照固定的顺序自动执行
        mounted() {
            console.log('mounted钩子函数自动执行')
            axios.get('http://106.52.170.128:8888/api/getlunbo')
                .then(res => {
                    console.log(res)
                })
        }
    }
</script>

<style>
    img {
        width: 200px;
        height: 150px;
    }
    .swipe{
        background-color: red;
        text-align: center;
        line-height: 100px;
    }
</style>