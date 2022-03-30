/**
 * 实现`Promise.allSettled()`
 *  https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
 */

/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
 function allSettled(promises) {
  const totalCount = promises.length

  if (!totalCount) {
    return Promise.resolve([])
  }

  // your code here
  if (!Array.isArray(promises)) {
    return Promise.resolve([{
      status: 'fulfilled',
      value: promises
    }])
  }

  const results = []
  let completeCount = 0
  return new Promise((resolve) => {
    for(let i = 0; i < totalCount; i++) {
      Promise.resolve(promises[i]).then(res => {
        results[i] = {
          status: 'fulfilled',
          value: res
        }
      }).catch(err => {
        results[i] = {
          status: 'rejected',
          reason: err
        }
      }).finally(() => {
        completeCount++
        if (totalCount === completeCount) {
          resolve(results)
        }
      })
    }
  })
}

allSettled([1,2,3, Promise.reject('error')]).then(res => {
  console.log('22', res)
})

