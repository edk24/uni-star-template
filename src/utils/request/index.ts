import HttpRequest from "./http";
import type { HttpRequestOptions, RequestHooks } from "./type";
import { getToken } from "../auth";
import { RequestCodeEnum, RequestMethodsEnum } from "@/enums/requestEnums";
import { useUserStore } from "@/stores/user";
import { useMessage } from "../message";
import { loginPage } from "@/setting";

const message = useMessage();
const requestHooks: RequestHooks = {
    /**
     * 请求拦截器
     */
    requestInterceptorsHook(options, config) {
        const { urlPrefix, baseUrl, withToken } = config;
        options.header = options.header ?? {};
        if (urlPrefix) {
            options.url = `${urlPrefix}${options.url}`;
        }
        if (baseUrl) {
            options.url = `${baseUrl}${options.url}`;
        }
        const token = getToken();
        // 添加token
        if (withToken && !options.header.token) {
            options.header.token = token;
        }
        return options;
    },

    /**
     * 响应拦截器
     */
    responseInterceptorsHook(response, config) {
        const { isTransformResponse, isReturnDefaultResponse, isAuth } = config;

        //返回默认响应，当需要获取响应头及其他数据时可使用
        if (isReturnDefaultResponse) {
            return response;
        }
        // 是否需要对数据进行处理
        if (!isTransformResponse) {
            return response.data;
        }
        const userStore = useUserStore();
        const { code, data, msg, show } = response.data as any;
        switch (code) {
            case RequestCodeEnum.SUCCESS:
                if (msg && show) {
                    message.toast(msg);
                }
                return data;
            case RequestCodeEnum.FAILED:
                message.toast(msg);
                return Promise.reject(msg);

            case RequestCodeEnum.TOKEN_INVALID: // Token 过期 | 登录失效
                userStore.logout();
                if (isAuth && !getToken()) {
                    message.toast("请先登录后再试");
                    // 防止小程序跳转页面看不到 Toast
                    setTimeout(() => {
                        uni.navigateTo({
                            url: loginPage
                        });
                    }, 800);
                }
                return Promise.reject();

            default:
                return data;
        }
    },

    /**
     * 响应拦截器异常
     */
    responseInterceptorsCatchHook(options, err) {
        if (options.method?.toUpperCase() == RequestMethodsEnum.POST) {
            console.log("🔥请求失败:", err, options);
        }
        return Promise.reject();
    }
};

const defaultOptions: HttpRequestOptions = {
    requestOptions: {
        timeout: 10 * 1000,
        header: { version: "1.0.0" }
    },
    baseUrl: `${import.meta.env.VITE_APP_BASE_URL || ""}/`,
    isReturnDefaultResponse: false,
    isTransformResponse: true,
    urlPrefix: "",
    ignoreCancel: false,
    withToken: true,
    isAuth: true,
    retryCount: 2,
    retryTimeout: 300,
    requestHooks: requestHooks
};

function createRequest(opt?: HttpRequestOptions) {
    return new HttpRequest(Object.assign({}, defaultOptions, opt || {}));
}
const request = createRequest();
export default request;
