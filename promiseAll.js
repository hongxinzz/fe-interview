/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 11:39:31
 * @FilePath: /fe-interview/promiseAll.js
 * @LastEditTime: 2020-10-30 14:57:50
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */
function prmiseAll(stacks) {
    if (!Array.isArray(stacks)) return;
    let result = [], len = stacks.length;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < stacks.length; i++) {
            stacks[i].then(data => {
                result[i] = data;
                if (result.length === len) {
                    resolve(result)
                }
            }).catch(error => {
                reject(error)
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

prmiseAll([sleep(2000), sleep(1000), sleep(3000)]).then(data => {
    console.log(data)
})
