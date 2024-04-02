export type RequestOptions = UniApp.RequestOptions;
export type ResponseResult = UniApp.RequestSuccessCallbackResult | UniApp.UploadFileSuccessCallbackResult;
export type RequestOptionsResponseError = UniApp.GeneralCallbackResult;
export type RequestTask = UniApp.RequestTask;
export type UploadFileOption = UniApp.UploadFileOption;
export interface HttpRequestOptions extends RequestConfig {
    requestOptions: Partial<RequestOptions>;
}

export interface RequestConfig {
    /**
     * 基础 URL
     */
    baseUrl: string;

    /**
     * 请求钩子 （拦截器处理）
     */
    requestHooks: RequestHooks;

    /**
     * 是否返回默认的响应
     */
    isReturnDefaultResponse: boolean;

    /**
     * 需要对返回数据进行处理
     */
    isTransformResponse: boolean;

    /**
     * 接口拼接地址
     */
    urlPrefix: string;

    /**
     * 忽略重复请求
     */
    ignoreCancel: boolean;

    /**
     * 是否携带 Token
     */
    withToken: boolean;

    /**
     * 是否需要登录
     */
    isAuth: boolean;

    /**
     * 重复次数
     */
    retryCount: number;

    /**
     * 重复超时
     */
    retryTimeout: number;

    hasRetryCount?: number;
}

export interface RequestHooks {
    // eslint-disable-next-line no-unused-vars
    requestInterceptorsHook?(options: RequestOptions, config: RequestConfig): RequestOptions;
    // eslint-disable-next-line no-unused-vars
    responseInterceptorsHook?(response: ResponseResult, config: RequestConfig): any;
    // eslint-disable-next-line no-unused-vars
    responseInterceptorsCatchHook?(options: RequestOptions, error: any): any;
}
