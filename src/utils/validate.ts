/**
 * 验证手机号
 * 
 * @param phoneNumber 
 * @returns 
 */
export const validatePhoneNumber = (phoneNumber: string):boolean => {
    const phoneRegex = /^1[3456789]\d{9}$/;
    return phoneRegex.test(phoneNumber);
}