/**
 * 对象到查询参数

 */
export const objectToQuery = (params: AnyObject): string => {
    return Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");
};

/**
 * 查询参数到对象
 */
export const queryToObject = (query: string): AnyObject => {
    const obj = {};
    query.replace('?', '').split('&').forEach(param => {
        const [key, value] = param.split('=');
        // @ts-ignore
        obj[key] = decodeURIComponent(value);
    });
    return obj;
};
