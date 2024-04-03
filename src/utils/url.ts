/**
 * 对象到查询参数
 *
 * @param params AnyObject
 * @returns string
 */
export const objToQueryParams = (params: AnyObject): string => {
    return Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");
};
