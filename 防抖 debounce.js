/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 11:36:43
 * @FilePath: /fe-interview/debounce.js
 * @LastEditTime: 2020-10-30 14:57:42
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */
function debounce(fn, wait) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer)
        setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}