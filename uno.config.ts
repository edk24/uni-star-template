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
        btn: "font-semibold rounded-md inline-block text-white text-base px-3 py-1 after:border-none disabled:cursor-not-allowed",
        "btn-primary": "bg-primary hover:bg-primary/[0.7] disabled:bg-primary/[0.5]",
        "btn-success": "bg-success hover:bg-success/[0.7]",
        "btn-info": "bg-info hover:bg-info/[0.7]",
        "btn-warn": "bg-warn hover:bg-warn/[0.7]",
        "btn-danger": "bg-danger hover:bg-danger/[0.7]",
        "btn-block": "block w-full py-2! text-lg",
        "btn-circle": "rounded-full",
        "btn-sm": "px-2 py-1 text-sm",
        "btn-lg": "px-4 py-2 text-lg",
        // 去除 uniapp 按钮默认边框
        "btn-empty": "after:border-none",
        // 标签
        label: "inline-block px-1 py-1/600 rounded-md text-base",
        "label-primary": "bg-primary text-white",
        "label-success": "bg-success text-white",
        "label-info": "bg-info text-white",
        "label-warn": "bg-warn text-white",
        "label-danger": "bg-danger text-white",
        "label-xs": "text-xs",
        "label-sm": "text-sm",
        "label-lg": "text-lg",
        "label-circle": "rounded-full px-2"
    },
    presets: [presetUno(), presetAttributify()]
});
