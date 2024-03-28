import { defineStore } from "pinia";
import { getToken, removeToken, setToken } from "../utils/auth";
import { apiGetUserInfo } from "@/api/user";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            // 用户信息
            userInfo: {},
            // token
            token: getToken() || null
        };
    },

    getters: {
        // 是否登录 (仅检查是否有 token, 不检查是否有效)
        isLogin: (state) => state.token
    },

    actions: {
        // 获取用户信息
        async getUser() {
            const data = await apiGetUserInfo();
            this.userInfo = data;
        },

        // 登录
        login(token: string) {
            this.token = token;
            setToken(token);
            this.getUser();
        },

        // 注销
        logout() {
            this.token = "";
            this.userInfo = {};
            removeToken();
        }
    }
});
