/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 15:04:23
 * @FilePath: /fe-interview/flatArray.js
 * @LastEditTime: 2020-10-30 15:10:03
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */
var arr = [1, [2], [3, [4, 5]]];


/**
 * 暴力法
 */
arr.flat(Infinity)


/**
 * reduce
 */

function flatArray(array) {
    if (!Array.isArray(array)) return;

    return array.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatArray(cur) : cur)
    }, [])

}
flatArray(arr) //[1, 2, 3, 4, 5]
