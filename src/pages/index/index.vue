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
</template>

<script setup lang="ts">
import { format_past } from '@/utils/datetime';
import { ref } from 'vue';
const title = ref('Hello');

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
