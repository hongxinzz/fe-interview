/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 12:17:23
 * @FilePath: /fe-interview/single.js
 * @LastEditTime: 2020-10-30 14:57:58
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */

/**
 * 单例模式
 */

function StroageBase() { }

StroageBase.prototype = {
    getItem: function (key) {
        return window.localStorage.getItem(key)
    },
    setItem: function (key, val) {
        return window.localStorage.setItem(key, JSON.stringify(val))
    }
}

const Stroage = (function () {
    let instance = null;
    return function () {
        if (!instance) {
            instance = new StroageBase();
        }
        return instance
    }
})()

const stroage = Stroage();
const stroage1 = Stroage();

stroage.setItem('test', 123)

stroage.getItem('test') //123
stroage1.getItem('test')//123

stroage1 === stroage //true