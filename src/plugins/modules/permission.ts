import { useUserStore } from "@/stores/user";
import { loginPage, whiteList } from "@/setting";

/**
 * 初始化路由跳转拦截
 */

function initPermission() {
    const userStore = useUserStore();
    const apiList = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];

    apiList.forEach((funcName: string) => {
        uni.addInterceptor(funcName, {
            invoke(args) {
                console.log("拦截", args);
                // 提取 url 去掉查询参数
                const url = args.url.split("?")[0];

                // 在白名单中的页面不做拦截
                const isWhite = !whiteList.includes(url);
                if (isWhite) {
                    return;
                }

                // 未登录跳转到登录页
                if (!userStore.isLogin) {
                    uni.showToast({
                        title: "请先登录",
                        icon: "none"
                    });
                    setTimeout(() => {
                        // 解决小程序跳转太快看不到 Toast 的问题
                        uni.navigateTo({
                            url: loginPage
                        });
                    }, 800);
                }
            },
            fail(result) {
                console.log("拦截失败", result);
            }
        });
    });
}

export default () => {
    initPermission();
};
