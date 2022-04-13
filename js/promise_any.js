/**
 * 实现 Promise.any()
 * https://bigfrontend.dev/zh/problem/implement-Promise-any
 */


/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
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

  const errors = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < totalCount; i++) {
      Promise.resolve(promises[i]).then(res => {
        resolve(res)
      }).catch(err => {
        errors[i] = err
        if (errors.length === totalCount) {
          reject(new AggregateError(
            errors,
            'No Promise in Promise.any was resolved'
          ))
        }
      })
    }
  })
}