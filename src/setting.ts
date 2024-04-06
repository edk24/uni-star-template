/**
 * 登录页面
 */
export const loginPage = "/pages/login/login";

/**
 * 白名单页面 （不做登录检查）
 */
export const whiteList = [loginPage, "/pages/index/login"];

/**
 * 分享配置，可在页面 data 中覆盖
 */
export const shareConfig = {
    // 默认分享配置
    // 参考：https://uniapp.dcloud.net.cn/api/plugins/share.html#onshareappmessage
    base: {
        // 默认分享标题，必填
        title: "默认分享标题",
        // 默认分享图片 比例 5:4，可选，留空则是页面截图
        imageUrl: "",
        // 默认分享路径，可选，默认当前页面路径
        path: ""
    },
    // 分享到朋友圈配置
    // 参考：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareTimeline
    timeLine: {
        // 分享标题，必填
        title: "分享朋友圈标题",
        // 查询参数，可选，如 a=1&b=2
        query: "",
        // 分享logo 比例 1:1，可选，默认使用小程序 logo
        imageUrl: ""
    }
};
