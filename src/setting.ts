/**
 * 登录页面
 */
export const loginPage = "/pages/login/login";

/**
 * 白名单页面 （不做登录检查）
 */
export const whiteList = [loginPage, "/pages/index/login"];

/**
 * 小程序通用分享配置
 */
export const shareConfig = {
    // 默认分享标题
    title: "分享标题",
    // 默认分享图片 比例 5:4，可选，留空则是页面截图
    imageUrl: ""
};
