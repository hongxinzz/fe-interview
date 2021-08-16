/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-11-03 11:45:03
 * @FilePath: /fe-interview/发布订阅 eventEmiter.js
 * @LastEditTime: 2020-11-03 11:45:10
 * @symbol_custom_string_obkoro: 不想有bug xinghe@gaoding.com
 */
const eventEmiter = {

    eventList: {},

    $on(key, fn) {
        if (!this.eventList[key]) {
            this.eventList[key] = [];
        }
        this.eventList[key].push(fn)
    },


    $emit() {
        let key = [].shift.call(arguments), fns = this.eventList[key];
        if (!(fns && fns.length)) return false;
        fns.forEach(fn => {
            fn.apply(this, arguments)
        })
    },

    remove(key, fn) {
        let fns = this.list[key];
        if (!fns) return false;
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            fns.forEach((item, i) => {
                if (item === fn) {
                    fns.splice(i, 1)
                }
            })
        }
    }
}