export default {
    // 小程序
    miniapp: {
        // 默认分享标题
        defaultShareTitle: "默认分享标题",
        // 分享到朋友圈的链接
        shareTimeLineLink: "/pages/index/index"
    },

    // 需要登录处理 (未登录/登录失效拦截处理)
    needLoginHandle: () => {
        uni.navigateTo({
            url: "/pages/login/login"
        });
    }
};
