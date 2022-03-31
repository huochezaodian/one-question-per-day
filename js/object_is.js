/**
 * 实现 Object.is()
 * https://bigfrontend.dev/zh/problem/implement-Object.is
 */

/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
 function is(a, b) {
  // NaN
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true
  }
  // 0, -0用无穷数 infinity 比较
  if (a === 0 && b === 0) {
    return 1/a === 1/b
  }
  return a === b
}