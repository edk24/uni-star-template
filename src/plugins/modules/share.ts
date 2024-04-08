import { objToQueryParams } from "@/utils/url";
import type { App } from "vue";
import { shareConfig } from "@/setting";

/**
 * 小程序分享混入
 */
const mixin = {
    /**
     * 小程序分享
     */
    onShareAppMessage(): object {
        // 获取当前页面路径与参数
        // @ts-ignore
        const route = ["/", this.$scope.route].join("");
        // @ts-ignore
        const options = this.$scope.options;
        const query = objToQueryParams(options);
        const path = route + "?" + query;

        const shareData = { ...shareConfig, ...{ path } };
        return shareData;
    },

    /**
     * 分享到朋友圈
     */
    onShareTimeline(): object {
        // 获取当前页面参数
        // @ts-ignore
        const options = this.$scope.options;
        const query = objToQueryParams(options);
        const shareData = { ...shareConfig, ...{ query, imageUrl: "" } }; // 默认 imageUrl 为空（使用小程序 logo）

        return shareData;
    }
};

export default (app: App) => {
    // #ifdef MP
    app.mixin(mixin);
    // #endif
};
