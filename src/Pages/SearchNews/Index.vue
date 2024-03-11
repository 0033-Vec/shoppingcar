<template>
    <div class="root">
        <!-- 图片详细 {{ $route.params.imgid }} -->
        <!-- 1. 顶部导航栏 -->
        <van-nav-bar title="搜索资讯" left-text="返回" left-arrow @click-left="$router.go(-1)" />
        <!-- 搜索栏区域 -->
        <form action="/">
            <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
        </form>

    </div>
</template>

<script>
    export default {

    };
</script>

<style>

</style>