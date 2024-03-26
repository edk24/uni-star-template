import request from "@/utils/request"

/**
 * 获取用户信息
 */
export const apiGetUserInfo = () => {
    return request.get({
        url: '/api/user/get'
    })
}