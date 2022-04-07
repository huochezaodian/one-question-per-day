/**
 * 旋转链表
 * https://leetcode-cn.com/problems/rotate-list/
 */

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || !head || !head.next) {
    return head
  }
  // 链表长度
  let count = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    count++
  }
  // count 和 k 倍数处理
  let realK = k % count
  if (realK === 0) {
    return head
  }
  // 闭环处理
  cur.next = head
  // cur 现在是指向链尾，移动 count - realK 次
  realK = count - realK
  while (realK--) {
    cur = cur.next
  }
  // 闭环断开, 返回的事链头，现在 cur 是链尾
  let result = cur.next
  cur.next = null
  return result
};