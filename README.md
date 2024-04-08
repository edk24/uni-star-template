# edk24/uni-star-template

[在线文档](https://unistar-docs.netlify.app/)

## 技术选型

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

```bash
# 安装依赖
pnpm install

# 运行h5
pnpm run dev:h5

# 运行小程序
pnpm run dev:mp-weixin

# 更多运行方式请查看 package.json 的 scripts
```

## 参考文档

- [z-paging 快速上手](https://z-paging.zxlee.cn/start/intro.html)

## 常见问题

- Q: 已安装 vscode 扩展 `UnoCss` 但是没有原子化样式提示
  > 卸载 `Tailwind CSS IntelliSense` 插件
