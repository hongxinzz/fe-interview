/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 11:22:01
 * @FilePath: /fe-interview/deepClone.js
 * @LastEditTime: 2020-10-30 11:33:54
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */


function deepClone(obj) {
    if (obj === null) obj = '';
    console.log(obj.constructor())
    const t = new obj.constructor();
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== 'object') return obj;
    for (const key in obj) {
        t[key] = deepClone(obj[key]);
    }
    return t;
}


const test = { a: 1, b: 2, c: { d: 1 }, d: function () { }, e: null, time: new Date(), regexp: /.png/ };

deepClone(test)



