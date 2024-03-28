/**
 * 节流
 *
 * @param { Function } func
 * @param { Number } time
 * @return { Function }
 */
export const throttle = (func: Function, time: number = 1000): Function => {
    let previous = new Date(0).getTime();
    return function (...args: []) {
        const now = new Date().getTime();
        if (now - previous > time) {
            previous = now;
            return func(args);
        }
    };
};

/**
 * 防抖
 *
 * @param { Function } func
 * @param { Number } time
 * @return { Function }
 */
export const debounce = (func: Function, time: number = 1000): Function => {
    let timer: any = null;
    return (...args: any[]) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            func(args);
        }, time);
    };
};

/**
 * 手机号加掩码
 *
 * @param phoneNumber
 * @returns
 */
export function maskPhoneNumber(phoneNumber: string): string {
    // 检查手机号码是否合法
    if (!/^1\d{10}$/.test(phoneNumber)) {
        return "";
    }

    // 将手机号码的中间四位数字替换为星号
    const maskedNumber = phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");

    return maskedNumber;
}

export function isFunction(fn: any): boolean {
    return typeof fn === "function";
}
