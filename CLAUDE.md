# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目架构

这是一个基于 UniApp + Vue 3 + TypeScript + Vite 的多端开发模板项目，支持 H5、小程序、App 等多个平台。

### 核心技术栈
- **UniApp**: 跨端开发框架
- **Vue 3**: Composition API + TypeScript
- **Vite**: 构建工具
- **UnoCSS**: 原子化 CSS 框架
- **Pinia**: 状态管理
- **z-paging**: 分页组件

### 目录结构
```
src/
├── api/          # API 接口
├── enums/        # 枚举定义
├── plugins/      # Vue 插件
├── stores/       # Pinia 状态管理
├── utils/        # 工具函数
│   └── request/  # 网络请求封装
└── pages/        # 页面组件
```

## 开发命令

### 开发环境
```bash
# H5 开发
pnpm run dev:h5

# 微信小程序开发
pnpm run dev:mp-weixin

# App 开发
pnpm run dev:app
```

### 构建命令
```bash
# H5 构建
pnpm run build:h5

# 微信小程序构建
pnpm run build:mp-weixin

# App 构建
pnpm run build:app
```

### 代码质量
```bash
# TypeScript 类型检查
pnpm run type-check

# ESLint 代码检查
pnpm run lint

# Prettier 代码格式化
pnpm run prettier
```

## 网络请求

项目使用自定义的请求封装 (`src/utils/request/`)，支持：
- 请求拦截器（自动添加 token）
- 响应拦截器（统一错误处理）
- 请求取消
- 重试机制

## 样式系统

使用 UnoCSS 原子化样式，配合 `vite-plugin-uni-twucss` 处理 rpx 单位转换。

## 多端适配

项目支持以下平台：
- H5
- 微信小程序 (mp-weixin)
- 支付宝小程序 (mp-alipay)
- 百度小程序 (mp-baidu)
- App (iOS/Android)
- 其他小程序平台

## 注意事项

1. **单位处理**: UnoCSS 提示 rem 是正常的，实际会转换为 rpx
2. **插件冲突**: 卸载 `Tailwind CSS IntelliSense` 插件避免冲突
3. **环境变量**: 通过 `import.meta.env.VITE_APP_BASE_URL` 访问配置