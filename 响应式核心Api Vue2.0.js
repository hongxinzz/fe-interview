/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 22:09:13
 * @FilePath: /fe-interview/响应式核心原理 Vue2.0.js
 * @LastEditTime: 2020-10-30 22:33:10
 * @symbol_custom_string_obkoro: 不想有bug xinghe@gaoding.com
 */


// <div id="name"></div>
// <div id="age"></div>



// 组件内data
let data = {
    name: "",
    age: "",
};

//模拟初始化
function init(obj) {
    // 获取所有key  {name:'',age:''} =>['name','age']
    const keys = Object.keys(obj);
    this.renderDom(obj);
    for (let i = 0; i < keys.length; i++) {
        // 监听
        defineReactive(obj, keys[i]);
    }
}

// 监听
function defineReactive(obj, key) {
    Object.defineProperty(obj, key, {
        enumerable: true, //可遍历
        configurable: true, // 可配置 可以删除 替换
        get(val) {
            return val;
        },
        set(newVal) {
            document.querySelector(`#${key}`).innerHTML = newVal;
        },
    });
}

// 生成dom

function renderDom(obj) {
    const keys = Object.keys(obj);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < keys.length; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", keys[i]);
        fragment.append(div);
    }
    document.body.append(fragment);
}

init(data);

data.age = 23;
data.name = "xinghe";