<template>
  <view>文字:</view>
  <view class="flex justify-around">
    <view class="text-primary">primary</view>
    <view class="text-success">success</view>
    <view class="text-info">info</view>
    <view class="text-warn">warn</view>
    <view class="text-danger">danger</view>
  </view>
  <view> 背景:</view>
  <view class="flex justify-around text-white">
    <view class="bg-primary text-base">primary</view>
    <view class="bg-success">success</view>
    <view class="bg-info">info</view>
    <view class="bg-warn">warn</view>
    <view class="bg-danger">danger</view>
  </view>
  <view> 原子化按钮:</view>
  <view>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-warn">Warn</button>
    <button class="btn btn-danger">Danger</button>
  </view>
  <view>
    <button class="btn btn-primary btn-circle">Primary</button>
    <button class="btn btn-success btn-circle">Success</button>
    <button class="btn btn-info btn-circle">Info</button>
    <button class="btn btn-warn btn-circle">Warn</button>
    <button class="btn btn-danger btn-circle">Danger</button>
  </view>
  <view class="flex">
    <button class="btn btn-primary btn-lg" disabled>Primary</button>
    <button class="btn btn-success btn-lg">Success</button>
    <button class="btn btn-info btn-lg">Info</button>
    <button class="btn btn-warn btn-lg">Warn</button>
    <button class="btn btn-danger btn-lg">Danger</button>
  </view>
  <view class="flex">
    <button class="btn btn-primary btn-sm">Primary</button>
    <button class="btn btn-success btn-sm">Success</button>
    <button class="btn btn-info btn-sm">Info</button>
    <button class="btn btn-warn btn-sm">Warn</button>
    <button class="btn btn-danger btn-sm">Danger</button>
  </view>
  <view>
    标签
    <view>
      <view class="label label-primary label-lg">主要</view>
      <view class="label label-success label-sm">成功</view>
      <view class="label label-info label-xs">信息</view>
      <view class="label label-warn label-circle">警告</view>
      <view class="label label-danger">危险</view>
    </view>
  </view>
</template>

<script setup lang="ts">

</script>

<style>
</style>
