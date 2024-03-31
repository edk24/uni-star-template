import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
    lang: "en-US",

    title: "UniSimpleTemplate",
    description: "简单快速上手的 uniapp 项目模板",

    theme: defaultTheme({
        logo: "https://vuejs.press/images/hero.png",

        navbar: ["/guide", "/components", "/api", "/changelog"]
    }),

    bundler: viteBundler()
});
