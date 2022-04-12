/**
 * 有序链表转换二叉搜索树
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 */

 function sortedListToBST(head: ListNode | null): TreeNode | null {
  const sortedArr: number[] = []
  while (head) {
    sortedArr.push(head.val)
    head = head.next
  }
  const createBst = (start: number, end: number) => {
    if (start > end) return null
    const mid = Math.floor((start + end) / 2)
    const root = new TreeNode(sortedArr[mid])
    root.left = createBst(start, mid - 1)
    root.right = createBst(mid + 1, end)
    return root
  }

  return createBst(0, sortedArr.length - 1)
};