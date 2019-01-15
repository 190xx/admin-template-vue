// 类型校验
export function typeOf (obj: any, type?: string) {
    const toString = Object.prototype.toString;
    const result = toString.call(obj).slice(8, -1).toLowerCase();
    return type ? result === type.toLowerCase() : result;
}

// 深度拷贝
export function deepCopy (data: any) {
    const type = typeOf(data);
    let target: any;

    if (type === 'array') {
        target = [];
    } else if (type === 'object') {
        target = {};
    } else {
        return data;
    }

    if (type === 'array') {
        data.forEach((item: any) => target.push(deepCopy(item)));
    } else if (type === 'object') {
        Object.keys(type).forEach((key: string) => {
            target[key] = deepCopy(data[key]);
        });
    }
    return target;
}

/**
 * 数组去重
 * @param {...Array} arguments 原数组，不限数组个数
 * @returns {*[]} 去重后的新数组
 */
export function unique () {
    return Array.from(new Set([].concat(...arguments)));
}

/**
 * 节流函数 (包含防抖): 节流期间执行最后一次触发的函数
 * @param {!Function} fn 需要节流的函数
 * @param {Number} [interval=0] 间隔 ms, 默认 0
 * @param {?Boolean} [resetInterval=false] 节流后是否立即重置间隔 默认 false, 设置 true 时为防抖函数
 * @returns {Function} 已节流函数
 */
export function throttle (fn: Function, interval = 0, resetInterval = false): Function {
    let timer: number | undefined;
    let [_self, isFirst] = [fn, true];
    return function (this: any) {
        if (isFirst && !resetInterval) {
            _self.apply(this, arguments);
            return isFirst = false;
        }
        if (timer) {
            if (resetInterval) {
                clearTimeout(timer);
                timer = undefined;
            } else {
                return false;
            }
        }
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = undefined;
            _self.apply(this, arguments);
        }, interval);
    };
}
