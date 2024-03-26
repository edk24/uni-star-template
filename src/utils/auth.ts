import cache from './cache'
import { CacheKeyEnum } from '@/enums/appEnums'

export function getToken():string {
    return cache.get(CacheKeyEnum.TOKEN)
}

export function setToken(token:string) {
    cache.set(CacheKeyEnum.TOKEN, token)
}

export function removeToken() {
    cache.remove(CacheKeyEnum.TOKEN)
}

export function jumpLogin() {
}