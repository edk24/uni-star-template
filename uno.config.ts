import { defineConfig, presetAttributify, presetUno } from 'unocss'

// 配置文档: https://unocss.dev/guide/config-file
export default defineConfig({
  theme: {
    colors: {
      primary: '#456dea',
      success: '#67c23a',
      info: '#909399',
      warn: '#e6a23c',
      danger: '#f56c6c'
    },
  },
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  presets: [
    presetUno(),
    presetAttributify(),
  ]
})