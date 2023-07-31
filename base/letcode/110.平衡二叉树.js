/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  //当前树的深度 等于左子树的深度与右子树的最大深度中的最大值+1
  if (root == null) return true
  // 递归三部曲 + 后序遍历 左中右, 当前树的左子树与右子树的高度相差大于1就返回-1
  // 1.确认递归函数参数以及 返回值
  const getDepth = (root) => {
    // 2.z
    if (root == null) return 0
    // 3. 确认单层递归逻辑
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1
  }

  // 如果左右子树层高相差小于2的话，就是相对平衡的，这时返回实际的层高，否则就返回-1
  return (
    Math.abs(getDepth(root.left) - getDepth(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
// @lc code=end
