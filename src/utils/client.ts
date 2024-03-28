import { ClientEnum } from "@/enums/appEnums";

/**
 * 判断是否为微信环境
 *
 * @return { Boolean }
 */
export const isWeixinClient = (): boolean => {
    // #ifdef H5
    return /MicroMessenger/i.test(navigator.userAgent);
    // #endif
};

/**
 * 判断是否为安卓环境
 * @return { Boolean }
 */
export function isAndroid(): boolean {
    const u = navigator.userAgent;
    return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
}

/**
 * 获取客户端类型
 *
 * @return { Object }
 */
export const getClient = () => {
    //@ts-ignore
    return handleClientEvent({
        // 微信小程序
        MINIAPP: () => ClientEnum["MINIAPP"],
        // 微信公众号
        MP_WEIXIN: () => ClientEnum["MP_WEIXIN"],
        // H5
        H5: () => ClientEnum["H5"],
        // APP
        IOS: () => ClientEnum["IOS"],
        ANDROID: () => ClientEnum["ANDROID"],
        // 其它
        OTHER: () => null
    });
};

// 根据端处理事件
//@ts-ignore
export const handleClientEvent = ({ MP_WEIXIN, MINIAPP, H5, IOS, ANDROID, OTHER }) => {
    // #ifdef MP-WEIXIN
    return MINIAPP();
    // #endif

    // #ifdef H5
    return isWeixinClient() ? MP_WEIXIN() : H5();
    // #endif

    // #ifdef APP-PLUS
    const system = uni.getSystemInfoSync();
    if (system.platform == "ios") {
        return IOS();
    } else {
        return ANDROID();
    }
    // #endif
    return OTHER();
};

export const client = getClient();
