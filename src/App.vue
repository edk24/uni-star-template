<script lang="ts" setup>
import { onLaunch, onShow, onHide, onError } from "@dcloudio/uni-app";
// 启动监听
onLaunch(() => {
    console.log("App Launch");
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
<style lang="scss">
@use "./global.scss" as *;
</style>
