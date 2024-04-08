<template>
    <view> hello~ </view>
</template>

<script setup lang="ts">
import { onShareTimeline } from "@dcloudio/uni-app";
import { onMounted } from "vue";

onMounted(() => {
    onShareTimeline(() => {
        const { imageUrl, title, query } = {
            imageUrl: "",
            title: "分享标题",
            query: ""
        };

        return {
            title,
            query,
            imageUrl
        };
    });
});
</script>

<style lang="scss"></style>
