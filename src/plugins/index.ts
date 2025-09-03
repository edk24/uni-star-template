import { isFunction } from "@/utils/common";
import type { App } from "vue";

import pinia from "./modules/pinia";
import permission from "./modules/permission";

const plugins = [pinia, permission];

export default {
    install: (app: App) => {
        plugins.forEach((plugin) => {
            if (isFunction(plugin)) {
                plugin(app);
            }
        });
    }
};
