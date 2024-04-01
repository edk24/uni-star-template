type ToastIcon = "success" | "loading" | "none" | "error";

/**
 * 弹出 toast
 *
 * @param msg
 * @param icon
 * @param mask
 * @returns
 */
export const showToast = (msg: string, icon: ToastIcon = "none", mask: boolean = false): Promise<any> => {
    return uni.showToast({
        title: msg,
        icon: icon,
        mask
    });
};

/**
 * 弹出 alert
 * @param content
 * @param title
 * @returns
 */
export const showAlert = (content: string, title: string = "提示"): Promise<UniApp.ShowModalRes> => {
    return uni.showModal({
        title: title,
        content: content
    });
};

/**
 * 显示输入框
 * 
 * @param content 
 * @param title 
 * @param placeholderText 
 * @returns 
 */
export const showPrompt = (content: string, title: string = "提示", placeholderText: string = '请输入'): Promise<UniApp.ShowModalRes> => {
    return uni.showModal({
        title: title,
        content: content,
        editable: true,
        placeholderText: placeholderText
    });
};

/**
 * 弹出加载动画
 *
 * @param text
 * @param mask
 * @returns
 */
export const showLoading = (text: string | undefined = undefined, mask: boolean = true): Promise<any> => {
    return uni.showLoading({
        title: text,
        mask: mask
    });
};

/**
 * 隐藏加载动画
 */
export const hideLoading = (): void => uni.hideLoading();

/**
 * 组合式API
 */
export const useMessage = () => {
    return {
        toast: showToast,
        success: (msg: string, mask: boolean = true) => showToast(msg, "success", mask),
        error: (msg: string, mask: boolean = true) => showToast(msg, "error", mask),
        alert: showAlert,
        showLoading,
        hideLoading
    };
};
