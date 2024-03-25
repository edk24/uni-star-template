import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from 'unocss/vite'
import uniTwuCssPlugin from 'vite-plugin-uni-twucss';
const path = require('path')

// vite配置文档: https://cn.vitejs.dev/
export default defineConfig({
  publicDir: '/h5',
  plugins: [
    uni(),
    UnoCSS(),
    // 把 unocss 不支持的 css 转换成 uni-app 的 css, !此处只能放在插件最后一行
    uniTwuCssPlugin({
			source: "unocss"
		}),
  ],

  server: {
    // 开发服务器配置自定义代理规则
    proxy: {
      '/api':'http://localhost:3001/'
    }
  },

  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@static': path.resolve(__dirname, 'src/static'),
    },
  },
});
