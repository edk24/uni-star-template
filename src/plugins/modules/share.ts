import { shareConfig } from "@/setting";
import { objToQueryParams } from "@/utils/url";
import type { App } from "vue";

/**
 * 小程序分享混入
 */
const mixin = {
    data() {
        return {
            shareConfig: shareConfig
        };
    },
    /**
     * 小程序分享
     */
    onShareAppMessage(res: any): object {
        const { imageUrl, title } = this.shareConfig.base;

        let path = this.shareConfig.base.path;
        if (!path) {
            const currentPage = this.$scope.route;
            const query = objToQueryParams(this.$scope.options);
            path = `/${currentPage}?${query}`;
        }

        // button
        if (res.from === "button") {
            // 这块需要传参，不然链接地址进去获取不到数据
            return {
                title,
                path,
                imageUrl
            };
        }

        // menu
        return {
            title,
            imageUrl
        };
    },

    /**
     * 分享到朋友圈
     */
    onShareTimeline(): object {
        const { imageUrl, title, query } = this.shareConfig.timeLine;

        return {
            title,
            query,
            imageUrl
        };
    }
};

export default (app: App) => {
    // #ifdef MP
    app.mixin(mixin);
    // #endif
};
