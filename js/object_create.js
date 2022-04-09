/**
 * 实现 Object.create()
 * https://bigfrontend.dev/zh/problem/implement-your-own-Object-create
 */

/**
 * @param {any} proto
 * @return {object}
 */
 function myObjectCreate(proto) {
  // 类型只能是 object 和 null
  if (typeof proto !== 'object') {
    throw TypeError('Object prototype may only be an Object or null:' + proto)
  }
  return {
    // 原型链挂载
    __proto__: proto
  }
}