<template>
    <div class="root">
        <!-- 图片详细 {{ $route.params.imgid }} -->
        <!-- 1. 顶部导航栏 -->
        <van-nav-bar title="留言反馈" left-text="返回" left-arrow @click-left="$router.go(-1)" />

        <!-- 留言区域 -->
        <van-cell-group>
            <van-field class="van-cell-group-textarea" v-model="message" label="留言" type="textarea" placeholder="请输入留言" rows="10" autosize />
        </van-cell-group>
        <van-button size="large" class="van-cell-group-btn">提交留言</van-button>
    </div>
</template>

<script>
    export default {
        
    };
</script>

<style>
    .van-cell-group-textarea{
        height: 100%;
        background-color: #eee !important;
    }
    .van-cell-group-btn{
        bottom: -260px;
        background-color: #1989fa;
        color: white;
    }
</style>