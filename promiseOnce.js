/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 12:14:20
 * @FilePath: /fe-interview/promiseOnce.js
 * @LastEditTime: 2020-10-30 12:16:46
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */
function promiseOnce(stacks) {
    if (!Array.isArray(stacks)) return;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < stacks.length; i++) {
            stacks[i].then(data => {
                resolve(data)
            })
        }
    })
}

function sleepFn() {
    return function () {
        const time = arguments[0];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(time)
            }, time)
        })
    }
}

const sleep = sleepFn();

promiseOnce([sleep(2000), sleep(1000), sleep(3000)]).then(data => {
    console.log(data)
})