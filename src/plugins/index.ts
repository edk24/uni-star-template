import { isFunction } from '@/utils/common'
import type { App } from 'vue'
const modules = import.meta.globEager('./modules/**/*.ts')

export default {
    install: (app: App) => {
        for (const module of Object.values(modules)) {
            // @ts-ignore
            const fun = module.default
            isFunction(fun) && fun(app)
        }
    }
}
