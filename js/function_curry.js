/**
 * 1.手写函数柯里化
function curry(func) {
  //此处补全
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying
 */

function curry(func) {
  let args = []
  return function callback() {
    const _args = [...arguments]
    args.push(..._args)
    // 参数个数对比
    if (args.length < func.length) {
      return callback
    }
    const result = func(...args)
    args = []
    return result
  }
}

function sum (a, b, c) {
  return a + b  + c
}

const curriedSum = curry(sum)
console.log(curriedSum(1, 2, 3))
console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1)(2)(3))
