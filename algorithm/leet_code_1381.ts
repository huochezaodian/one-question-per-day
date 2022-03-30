/**
 * 设计一个支持增量操作的栈
 *  https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 */

export class CustomStack {
  constructor(maxSize: number) {
    this.maxSize = maxSize || 0
  }
  maxSize: number = 0
  stack: number[] = []

  push(x: number): void {
    if (this.maxSize === this.stack.length) {
      return
    }
    this.stack.push(x)
  }

  pop(): number {
    if (!this.stack.length) {
      return -1
    }
    return this.stack.pop()
  }

  increment(k: number, val: number): void {
    if (!this.stack.length || !k) {
      return
    }
    const forLen = Math.min(k, this.stack.length)
    for (let i = 0; i < forLen; i++) {
      this.stack[i] += val
    }
  }
}
