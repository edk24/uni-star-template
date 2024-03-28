<template>
    <view>
        <navigator url="/pages/demo/index" open-type="navigate" hover-class="navigator-hover"> 效果演示 </navigator>
    </view>
</template>

<script setup lang="ts">
import cache from "@/utils/cache";

// cache.set('token', 111, 10)
console.log(cache.get("token"));
</script>

<style lang="scss"></style>
