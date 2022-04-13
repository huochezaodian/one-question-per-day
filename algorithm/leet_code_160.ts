/**
 * 相交链表
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null
  }
  let PA = headA
  let PB = headB
  while (PA !== PB) {
    PA = PA === null ? headB : PA.next
    PB = PB === null ? headA : PB.next
  }
  return PA
}