import type { App } from "vue";
import { createPinia } from "pinia";

/**
 * 文件名“_”前缀开头是因为 pinia 必须在 permission 之前加载；
 */
export default (app: App) => {
    app.use(createPinia());
};
