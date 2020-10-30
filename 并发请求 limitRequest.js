/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 15:16:56
 * @FilePath: /fe-interview/limitRequest.js
 * @LastEditTime: 2020-10-30 15:19:51
 * @symbol_custom_string_obkoro1: 不想有bug xinghe@gaoding.com
 */


/**
 * promise  请求并发
 */
var urls = [
    'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
    'https://api.apiopen.top/getJoke?page=2&count=2&type=video',
    'https://api.apiopen.top/getJoke?page=3&count=2&type=video',
    'https://api.apiopen.top/getJoke?page=4&count=2&type=video',
    'https://api.apiopen.top/getJoke?page=5&count=2&type=video',
    'https://api.apiopen.top/getJoke?page=6&count=2&type=video'
]


function multiRequest(urls, maxNum) {
    return new Promise((resolve, reject) => {
        const len = urls.length;
        let count = 0;

        const start = async () => {
            //弹出第第一个
            const url = urls.shift();
            await pFetch(url)
            if (count === len - 1) {
                resolve()
            } else {
                count++;
                start();
            }
        }

        while (maxNum > 0) {
            start();
            maxNum -= 1;
        }

    })
}

function pFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url).then(() => {
                resolve();
            }).catch(e => console.log(error))
        }, 3000)
    })
}


multiRequest(urls,3)