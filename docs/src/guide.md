# 指南

This is a normal page, which contains VuePress basics.

## 介绍

You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.

See [routing][] for more details.

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
