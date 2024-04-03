import setting from "@/setting";
import { objToQueryParams } from "@/utils/url";
import type { App } from "vue";

/**
 * 小程序分享混入
 */

const mixin = {
    data() {
        return {
            // 小程序分享配置
            shareConfig: {
                // 分享图片
                imageUrl: setting.defaultShareImage,
                // 分享标题
                title: setting.defaultShareTitle,
                // 分享朋友圈链接
                timeLinePath: setting.shareTimeLineLink
            }
        };
    },
    /**
     * 小程序分享
     */
    onShareAppMessage(res: any): object {
        // 分享图片
        const imageUrl = this.shareConfig.imageUrl || "";
        // 分享标题
        const title = this.shareConfig.title || setting.defaultShareTitle;
        // 路由地址
        const route = this.shareConfig.path || `/${this.$scope.route}`;
        // 接收参数
        const options = this.$scope.options;

        // button
        if (res.from === "button") {
            // 这块需要传参，不然链接地址进去获取不到数据
            const path = `${route}?` + objToQueryParams(options);
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
        const title = this.shareConfig.title;
        const path = this.shareConfig.timeLinePath;
        const imageUrl = setting.shareTimeLinkImage;

        return {
            title,
            path,
            imageUrl
        };
    }
};

export default (app: App) => {
    // #ifdef MP
    app.mixin(mixin);
    // #endif
};
