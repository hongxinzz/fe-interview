/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-30 22:37:31
 * @FilePath: /fe-interview/bind.js
 * @LastEditTime: 2020-11-03 17:30:20
 * @symbol_custom_string_obkoro: 不想有bug xinghe@gaoding.com
 */
function myBind(context, ...args) {
  let self = this;

  let fbound = function () {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  // 继承原型上的属性和方法
  fbound.prototype = Object.create(self.prototype);

  return fbound;
}
