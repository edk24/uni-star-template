import { defineConfig, presetAttributify, presetUno } from "unocss";

// 配置文档: https://unocss.dev/guide/config-file
export default defineConfig({
    theme: {
        colors: {
            primary: "#456dea",
            success: "#67c23a",
            info: "#909399",
            warn: "#e6a23c",
            danger: "#f56c6c"
        }
    },
    shortcuts: {
        // 去除 uniapp 按钮默认边框
        "btn-empty": "after:border-none",
    },
    presets: [presetUno(), presetAttributify()]
});
