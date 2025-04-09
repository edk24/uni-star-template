import manifest from "@/manifest.json";

/**
 * 应用名称
 */
export const appName = manifest.name;

/**
 * 应用版本
 */
export const appVersion = manifest.versionName;

/**
 * 登录页面
 */
export const loginPage = "/pages/login/login";

/**
 * 白名单页面 （不做登录检查）
 */
export const whiteList = [loginPage, "/"];
