<template>
    <view> hello~ </view>
</template>

<script setup lang="ts">
import { onShareTimeline } from "@dcloudio/uni-app";

// import { useMiniAppShare } from "@/composables/useMiniAppShare";
// useMiniAppShare();

onShareTimeline(() => {
    const { imageUrl, title, query } = {
        imageUrl: "",
        title: "分享标题111",
        query: ""
    };

    return {
        title,
        query,
        imageUrl
    };
});
</script>

<style lang="scss"></style>
