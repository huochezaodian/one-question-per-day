/**
 * LRU 缓存
 * https://leetcode-cn.com/problems/lru-cache/
 */

 class LRUDListNode {
  key: number
  val: number
  next: LRUDListNode | null
  prev: LRUDListNode | null
  constructor(key?: number, val?: number, next?: LRUDListNode | null, prev?: LRUDListNode) {
    this.key = (key === undefined ? 0 : key)
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.prev = (prev === undefined ? null : prev)
  }
}

class LRUCache {
    private capacity: number
    private cache: Map<number, LRUDListNode>
    private head: LRUDListNode
    private tail: LRUDListNode
    constructor(capacity: number) {
      this.capacity = capacity
      this.cache = new Map()
      this.head = new LRUDListNode()
      this.tail = new LRUDListNode()
      this.head.next = this.tail
      this.tail.prev = this.head
    }

    get(key: number): number {
      if (!this.cache.has(key)) {
        return -1
      }
      const node = this.cache.get(key)
      // 如果当前节点不是最前的了，就移动到最前
      this.removeNode(node)
      this.moveToHead(node)
      return node.val
    }

    put(key: number, value: number): void {
      if (this.cache.has(key)) {
        const node = this.cache.get(key)
        node.val = value
        this.removeNode(node)
        this.moveToHead(node)
        return
      }
      const newNode = new LRUDListNode(key, value)
      // 检查容量
      if (this.cache.size === this.capacity) {
        const tailNode  = this.tail.prev
        this.cache.delete(tailNode.key)
        this.removeNode(this.tail.prev)
      }
      this.cache.set(key, newNode)
      this.moveToHead(newNode)
    }

    private moveToHead(node: LRUDListNode) {
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
    }

    private removeNode(node: LRUDListNode) {
      node.prev.next = node.next
      node.next.prev = node.prev
    }
}