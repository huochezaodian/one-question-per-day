/**
 * 自定义 promise.race
 * https://bigfrontend.dev/problem/implement-Promise-race
 */

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function race(promises) {
  const totalCount = promises.length

  if (!totalCount) {
    return Promise.reject(new AggregateError(
      [],
      'All promises were rejected'
    ))
  }

  if (!Array.isArray(promises)) {
    return Promise.reject(new TypeError(`${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`))
  }

  return new Promise((resolve, reject) => {
    for (let i = 0; i < totalCount; i++) {
      Promise.resolve(promises[i]).then(resolve, reject)
    }
  })
}