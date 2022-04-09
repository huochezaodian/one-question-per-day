/**
 * 两两交换链表中的节点
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 */

 function swapPairs(head: ListNode | null): ListNode | null {
  const resultHead = new ListNode(0)
  resultHead.next = head
  let tmpNode = resultHead
  while (tmpNode.next !== null && tmpNode.next.next !== null) {
    let node1 = tmpNode.next
    let node2 = tmpNode.next.next
    // 首次执行是把 resultHead 的 next 指向链头
    tmpNode.next = node2
    node1.next = node2.next
    node2.next = node1
    tmpNode = node1
  }
  return resultHead.next
};