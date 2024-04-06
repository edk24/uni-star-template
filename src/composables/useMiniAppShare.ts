import { shareConfig } from "@/setting";
import { onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";

/**
 * 小程序分享混入
 */
export function useMiniAppShare(shareAppOptions: any | null = null, timeLineOptions: any | null = null) {
    shareAppOptions = shareAppOptions || shareConfig.base;
    timeLineOptions = timeLineOptions || shareConfig.timeLine;
    console.log("====");

    // 胶囊 | 按钮分享
    onShareAppMessage((res: Page.ShareAppMessageOption) => {
        const { imageUrl, title } = shareAppOptions;
        let { path } = shareAppOptions;

        if (!path) {
            // ywt
            const page = getCurrentPages();
            console.log(page, "page");

            // const currentPage = page.route;
            // const query = objToQueryParams(this.$scope.options);
            // path = `/${currentPage}?${query}`;
            path = "";
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
    });

    // 分享到朋友圈
    onShareTimeline(() => {
        const { imageUrl, title, query } = timeLineOptions;

        return {
            title,
            query,
            imageUrl
        };
    });
}
