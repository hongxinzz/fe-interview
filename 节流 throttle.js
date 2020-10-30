/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 11:54:12
 * @FilePath: /fe-interview/throttle.js
 * @LastEditTime: 2020-10-30 11:56:39
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */
function throttle(fn, wait) {
    let pre = new Date();
    return function () {
        let context = this, args = arguments, now = new Date();
        if (now - pre >= wait) {
            fn.apply(context, args);
            pre = now;
        }
    }
}