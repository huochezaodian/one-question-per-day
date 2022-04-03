/**
 * 用栈实现队列
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */

//先实现一个栈, 先入后出
class Stack {
  protected list: number[];
  constructor() {
      this.list = [];
  } 
  push(x: number): void {
      this.list.push(x);
  }

  peek(): number {
    return this.list[this.list.length - 1]
  }

  pop(): number {
      return this.list.pop();
  }

  isempty(): boolean {
      return this.list.length === 0;
  }
  
  size(): number {
      return this.list.length;
  }
}

class MyQueue {
  protected list: Stack
  protected tempList: Stack
  constructor() {
    this.list = new Stack()
    this.tempList = new Stack()
  }
  // 先入先出，要保证x在栈的顶部
  push(x: number): void {
    const listLength = this.list.size()
    for(let i = 0; i < listLength; i++) {
      this.tempList.push(this.list.pop())
    }
    this.list.push(x)
    const tempLength = this.tempList.size()
    for(let i = 0; i < tempLength; i++) {
      this.list.push(this.tempList.pop())
    }
  }

  pop(): number {
    return this.list.pop()
  }

  peek(): number {
    return this.list.peek()
  }

  empty(): boolean {
    return this.list.isempty()
  }
}