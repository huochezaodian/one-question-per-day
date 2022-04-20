/**
 * 求根节点到叶节点数字之和
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * 思路： 深度优先遍历，遍历每一个子树
 */

function getNumber(pre: number, child: TreeNode | null): number {
  if (child === null) {
    return 0
  }
  const cur = pre * 10 + child.val
  if (child.left === null && child.right === null) {
    return cur
  }
  return getNumber(cur, child.left) + getNumber(cur, child.right)
}

function sumNumbers(root: TreeNode | null): number {
  return getNumber(0, root)
}