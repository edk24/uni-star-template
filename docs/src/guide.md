# 指南

## 介绍

`uni-star-template` 是一个基于 `UniApp + Vue3 + TypeScript` 修改完善而来的项目模板；

下列是项目模板集成的一些库，开箱即用

- ✅ uniapp
- ✅ vue3
- ✅ vite
- ✅ typescript
- ✅ unocss (配合 `vite-plugin-uni-twucss` 处理单位为 `rpx`, 插件提示 `rem` 是正常的)
- ✅ z-paging (分页组件)
- ✅ prettier
- ✅ eslint
- ✅ sass
- ✅ vconsole (h5 开发模式生效)
- ✅ pinia
- ✅ pnpm

## 快速上手

### 安装

```bash
# 1. 克隆仓库
git clone https://github.com/edk24/uni-star-template.git

# 2. 安装依赖 （推荐用 pnpm）
pnpm install

# 3. 运行 h5
pnpm run dev:h5
```

### 目录结构

```tree
├── docs                // 文档
└── src                 
    ├── api             // 接口目录
    ├── enums           // 枚举目录
    ├── pages           // 页面
    ├── plugins         // 插件
    ├── static          // 静态资源
    ├── stores          // pinia
    └── utils           // 工具库
```

### 命令

```bash
# 调试
pnpm run dev:平台
# 编译
pnpm run build:平台
# 类型检查
pnpm run type-check
# 代码风格检查
pnpm run prettier
# 代码规范检查
pnpm run lint 
```

- **平台** 有哪些

| 平台                   | 备注                      |
| ---------------------- | ------------------------- |
| app                    | APP                          |
| app-android            | APP-安卓                          |
| app-ios                | APP-IOS                          |
| custom                 |                           |
| h5                     | h5                          |
| h5:ssr                 | h5:ssr                          |
| mp-alipay              | 支付宝小程序                          |
| mp-baidu               | 百度小程序                         |
| mp-jd                  | 京东小程序                          |
| mp-kuaishou            | 快手小程序                          |
| mp-lark                | 飞书小程序                          |
| mp-qq                  | qq 小程序                         |
| mp-toutiao             | 头条小程序                         |
| mp-weixin              | 微信小程序                         |
| quickapp-webview       | 快应用                        |
| quickapp-webview-huawei| 快应用-华为                         |
| quickapp-webview-union | 快应用-联盟                         |

## 开发规范了解

## 平台差异

### h5

- 开发调试模式时自动运行 `vconsole`，便于在手机浏览器上调试。

### 小程序

#### 通用分享 (全局混入)

让所有页面的胶囊分享与分享到朋友圈可用

**常见问题**

- 1. 修改分享标题与图片

    > 在 `src/setting.ts` 中修改 `shareConfig`。

- 2. 如何自定义某个页面的分享配置，自定义页面分享不生效

    > 把 `onShareTimeline` 和 `onShareAppMessage` 写到 `onLoad | onMounted` 里面即可生效。
