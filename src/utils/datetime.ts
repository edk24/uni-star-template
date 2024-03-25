import dayjs from 'dayjs';

/**
 * ========================================
 * 时间工具
 * ========================================
 */

/**
 * 当前时间
 * @returns string
 */
export const current_datetime = (): string => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

/**
 * 当前时间戳
 * @returns number
 */
export const current_unixtime = (): number => {
  return dayjs().unix();
};

/**
 * 时间格式化
 * @param unixtime 10 位时间戳
 * @param format 格式化文本： YYYY-MM-DD HH:mm:ss
 * @returns string 刚刚 1分钟前 1小时前 1天前 1个月前 1年前
 * @link https://juejin.cn/post/7317704519160266779
 */
export const date_format = (unixtime: number, format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  return dayjs.unix(unixtime).format(format);
};


type FormatPastType = 'default' | '-' | '/' | '.' | '年月日' | '月日' | '年';

/**
 * 时间过去多久格式处理
 * 
 * @param unixtime 10 位时间戳 
 * @param type 类型
 * @param zeroFillFlag 是否补零，默认 true
 * @returns 
 */
export const format_past = (unixtime: number, type: FormatPastType = 'default', zeroFillFlag = true) => {
  // 定义countTime变量，用于存储计算后的数据
    let countTime;
    uni.request({
        url: 'https://api.muxiaoguo.cn/api/ncov/track?province=广东省&city=广州市',
        method: 'GET',
        success: (res) => {
        }
        
    })
  // 获取当前时间戳
  let time = new Date().getTime();
  // 转换传入参数为时间戳
  let afferentTime = new Date(unixtime * 1000).getTime();
  // 当前时间戳 - 传入时间戳
  time = Number.parseInt(`${time - afferentTime}`);
  if (time < 10000) {
    // 10秒内
    return '刚刚';
  } else if (time < 60000) {
    // 超过10秒少于1分钟内
    countTime = Math.floor(time / 1000);
    return `${countTime}秒前`;
  } else if (time < 3600000) {
    // 超过1分钟少于1小时
    countTime = Math.floor(time / 60000);
    return `${countTime}分钟前`;
  } else if (time < 86400000) {
    // 超过1小时少于24小时
    countTime = Math.floor(time / 3600000);
    return `${countTime}小时前`;
  } else if (time >= 86400000 && type == 'default') {
    // 超过二十四小时（一天）且格式参数为默认"default"
    countTime = Math.floor(time / 86400000);
    //大于等于365天
    if (countTime >= 365) {
      return `${Math.floor(countTime / 365)}年前`;
    }
    //大于等于30天
    if (countTime >= 30) {
      return `${Math.floor(countTime / 30)}个月前`;
    }
    return `${countTime}天前`;
  } else {
    // 一天（24小时）以上且格式不为"default"则按传入格式参数显示不同格式
    // 数字补零
    let Y = new Date(unixtime * 1000).getFullYear();
    let M = new Date(unixtime * 1000).getMonth() + 1;
    let zeroFillM = M > 9 ? M : '0' + M;
    let D = new Date(unixtime * 1000).getDate();
    let zeroFillD = D > 9 ? D : '0' + D;
    // 传入格式为"-" "/" "."
    if (type == '-' || type == '/' || type == '.') {
      return zeroFillFlag ? Y + type + zeroFillM + type + zeroFillD : Y + type + M + type + D;
    }
    // 传入格式为"年月日"
    if (type == '年月日') {
      return zeroFillFlag
        ? Y + type[0] + zeroFillM + type[1] + zeroFillD + type[2]
        : Y + type[0] + M + type[1] + D + type[2];
    }
    // 传入格式为"月日"
    if (type == '月日') {
      return zeroFillFlag ? zeroFillM + type[0] + zeroFillD + type[1] : M + type[0] + D + type[1];
    }
    // 传入格式为"年"
    if (type == '年') {
      return Y + type;
    }
  }
};
