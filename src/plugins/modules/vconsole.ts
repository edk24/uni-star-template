// #ifdef H5
// 提交前需要注释  本地调试使用
import Vconsole from "vconsole";
import { isDevMode } from "@/utils/env";
// #endif

// eslint-disable-next-line consistent-return
export default () => {
    // #ifdef H5
    if (isDevMode()) {
        const vConsole = new Vconsole();
        return vConsole;
    }
    // #endif
};
