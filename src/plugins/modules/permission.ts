import { useUserStore } from "@/stores/user";
import { loginPage, whiteList } from "@/setting";
import type { App } from "vue";

/**
 * 初始化路由跳转拦截
 */
function initPermission() {
    const userStore = useUserStore();
    const apiList = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];

    apiList.forEach((funcName: string) => {
        uni.addInterceptor(funcName, {
            invoke(args) {
                // 提取 url 去掉查询参数
                const url = args.url.split("?")[0];

                // 在白名单中的页面不做拦截
                const isWhite = whiteList.includes(url);
                if (isWhite) {
                    return;
                }

                // 未登录跳转到登录页
                if (!userStore.isLogin) {
                    uni.showModal({
                        title: "温馨提示",
                        content: "请先登录"
                    }).finally(() => {
                        uni.navigateTo({
                            url: loginPage
                        });
                    });
                }
            },
            fail(result) {
                console.error("拦截失败", result);
            }
        });
    });
}

export default (_: App) => {
    initPermission();
};
