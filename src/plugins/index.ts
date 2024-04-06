import { isFunction } from "@/utils/common";
import type { App } from "vue";

const modules: Record<string, any> = import.meta.glob("./modules/**/*.ts", {
    eager: true,
    import: "default"
});

export default {
    install: (app: App) => {
        for (const defaultFunc of Object.values(modules)) {
            if (isFunction(defaultFunc)) {
                defaultFunc(app);
            }
        }
    }
};
