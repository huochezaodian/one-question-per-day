/**
 * 自定义事件监听
 * https://bigfrontend.dev/zh/problem/create-an-Event-Emitter
 */

class EventEmitter {
  constructor () {
    this.events  = new Map()
  }
  subscribe(eventName, callback) {
  	const callbacks = this.events.get(eventName) || new Set()
    const newCallback = { callback }
    callbacks.add(newCallback)
    this.events.set(eventName, callbacks)

    return {
      release() {
        callbacks.delete(newCallback)
      }
    }
  }
  
  emit(eventName, ...args) {
  	this.events.get(eventName).forEach(event => event.callback(...args))
  }
}