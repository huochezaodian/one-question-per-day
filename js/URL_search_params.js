/**
 * 实现 URLSearchParams
 * https://bigfrontend.dev/zh/problem/implement-your-own-URLSearchParams
 */

 class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    this.params = new Map()
    const searchStr = init.replace(/^.*\?/, '')
    const searchs = searchStr.split('&').map(search => search.split('='))
    searchs.forEach(([key, value]) => {
      console.log()
      this.append(key, value)
    })
  }

  /** 
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    if (this.params.has(name)) {
      this.params.get(name).push(String(value))
    } else {
      this.params.set(name, [String(value)])
    }
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.params.delete(name)
  }

  /**
   * @returns {Iterator} 
   */
  * entries() {
    for (let [key, values] of this.params) {
      for (let value of values) {
        yield [key, value]
      }
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    for (let [key, values] of this.params) {
      for (let value of values) {
        callback(value, key)
      }
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    return this.getAll(name)[0] || null
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.params.get(name.replace(/^.*\?/, '')) || []
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.params.has(name)
  }

  /**
   * @return {Iterator}
   */
  keys() {
    return this.params.keys()
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.params.set(name, [String(value)])
  }

  // sor all key/value pairs based on the keys
  sort() {
    const newParams = [...this.params]
    newParams.sort((a, b) => a[0] > b[0] ? 1 : -1)
    this.params = new Set(newParams)
  }

  /**
   * @return {string}
   */
  toString() {
    const result = [...this.params].flatMap(([key, values]) => {
      return values.map(value => {
        return [key, value].join('=')
      })
    })
    return result.join('&')
  }

  /**
   * @return {Iterator} values
   */
  * values() {
    const values = this.entries()
    let value
    while (value = values.next().value) {
      yield value[1]
    }
  }
}