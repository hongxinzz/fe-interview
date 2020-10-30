/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 22:37:39
 * @FilePath: /fe-interview/柯里化 curry.js
 * @LastEditTime: 2020-10-30 22:50:29
 * @symbol_custom_string_obkoro: 不想有bug xinghe@gaoding.com
 */




function sum(a, b, c) {
    return a + b + c;
}

function curry(fn) {

    return function curred(...args) {
        // fn 为 sum，sum.length = 3
        // 参数 展开的个数 是否 小于 fn的3个
        //是的话 继续返回函数接受 后续的参数 并把之前 第一个函数的参数合并
        //不是的话 fn 接收的是一个一个参数 将 ...args 展开传入fn
        if (args.length < fn.length) {
            return function () {
                return curred(...args.concat(Array.from(arguments)))
            }
        }
        return fn(...args)
    }
}

const c = curry(sum)

c(1, 2, 3) //6
c(1)(2)(3) //6
c(1, 2)(3) //6