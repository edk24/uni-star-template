const cache = {
    key: "app_",

    /**
     * 设置缓存
     *
     * @param key
     * @param value
     * @param expire 过期时间, 单位: 秒, 留空不过期
     * @returns
     */
    set(key: string, value: any, expire?: number) {
        key = this.getKey(key);
        let data: any = {
            expire: expire ? this.time() + expire : "",
            value
        };

        if (typeof data === "object") {
            data = JSON.stringify(data);
        }
        try {
            uni.setStorageSync(key, data);
        } catch (e) {
            return null;
        }
    },

    /**
     * 获取缓存
     *
     * @param key
     * @returns
     */
    get(key: string): any {
        key = this.getKey(key);
        try {
            const data = uni.getStorageSync(key);
            if (!data) {
                return null;
            }
            const { value, expire } = JSON.parse(data);
            if (expire && expire < this.time()) {
                uni.removeStorageSync(key);
                return null;
            }
            return value;
        } catch (e) {
            return null;
        }
    },
    // 获取当前时间
    time() {
        return Math.round(new Date().getTime() / 1000);
    },
    remove(key: string) {
        key = this.getKey(key);
        uni.removeStorageSync(key);
    },
    getKey(key: string) {
        return this.key + key;
    }
};

export default cache;
