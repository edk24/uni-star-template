import type { App } from "vue";
import { createPinia } from "pinia";

/**
 * 文件名“_”前缀开头是因为 pinia 必须在 permission 之前加载；
 * “_” 前缀的文件名排序靠前 ٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ
 */

const pinia = createPinia();
export default (app: App) => {
    app.use(pinia);
};
