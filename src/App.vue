<script lang="ts" setup>
import { onLaunch, onShow, onHide, onError, onShareTimeline } from "@dcloudio/uni-app";
import { onMounted } from "vue";
// 启动监听
onLaunch(() => {
    console.log("App Launch");
});

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

// 显示监听
onShow(() => {
    console.log("App Show");
});

// 隐藏监听
onHide(() => {
    console.log("App Hide");
});

// 错误监听
onError((e) => {
    console.error("UniApp 错误：", e);
});
</script>
<style></style>
