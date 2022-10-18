<template>
  <div id="app">
    <div class="hei">黑马头条</div>
    <i class="toutiao toutiao-wuwangluo"></i>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <router-view />
  </div>
</template>

<style lang="less">
.hei {
  height: 100px;
  width: 100px;
}
</style>
