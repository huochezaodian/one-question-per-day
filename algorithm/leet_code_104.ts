/**
 * 二叉树的最大深度
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  const leftDeep = maxDepth(root.left)
  const rightDeep = maxDepth(root.right)
  return Math.max(leftDeep, rightDeep) + 1
}