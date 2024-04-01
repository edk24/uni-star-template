import type { App } from "vue";
import config from "@/config";

const mixin = {
    data() {
        return {};
    },
    onLoad: function () {},
    // @ts-ignore
    onShareAppMessage(res) {
        // @ts-ignore
        const imageUrl = this.shareImageUrl || "";
        // @ts-ignore
        const title = this.shareTitle || config.miniapp.defaultShareTitle;

        if (res.from === "button") {
            // 这块需要传参，不然链接地址进去获取不到数据
            // @ts-ignore
            const path = `/` + this.$scope.route + `?item=` + this.$scope.options.item;
            return {
                title,
                path,
                imageUrl
            };
        }
        if (res.from === "menu") {
            return {
                title,
                imageUrl
            };
        }
    },
    // 分享到朋友圈
    // @ts-ignore
    onShareTimeline() {
        // @ts-ignore
        const title = this.shareTitle || config.miniapp.defaultShareTitle;
        const path = config.miniapp.shareTimeLineLink;
        return {
            title,
            path,
            imageUrl: ""
        };
    },
    methods: {}
};


export default (app: App) => {
    app.mixin(mixin);
};
