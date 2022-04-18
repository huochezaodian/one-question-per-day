/**
 * 相同的树
 * https://leetcode-cn.com/problems/same-tree/
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  }
  if (p !== null && q !== null && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  return false
}