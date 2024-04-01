import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: "en-US",

    title: "UniSimpleTemplate",
    description: "简单快速上手的 uniapp 项目模板",

    plugins: [
        searchPlugin({
        // 配置项
        }),
    ],

    theme: defaultTheme({
        logo: "https://vuejs.press/images/hero.png",

        navbar: ["/guide", "/components", "/api", "/changelog"],

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/edk24/uni-star-template',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
    }),
    

    bundler: viteBundler(),

    
});
