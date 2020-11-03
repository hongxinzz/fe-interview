/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 22:37:20
 * @FilePath: /fe-interview/new.js
 * @LastEditTime: 2020-11-03 11:55:02
 * @symbol_custom_string_obkoro: 不想有bug xinghe@gaoding.com
 */
function myNew(target, ...args) {
  let obj = Object.create(target.prototype);
  let result = obj.apply(target, args);
  return typeof result === "object" ? result : obj;
}
