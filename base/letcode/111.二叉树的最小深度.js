/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) return 0
  // 判断左子树与右子树是否为空，为空时表示达到叶子节点，直接返回1
  if (root.left == null && root.right == null) return 1
  // 判断左孩子或者右孩子是否存在一个为空，则返回不为空的孩子节点
  let mLeft = minDepth(root.left)
  let mRight = minDepth(root.right)
  if (root.left == null || root.right == null) return mLeft + mRight + 1
  // 3 左子树与右子树都不为空时，返回最小深度+1
  return Math.min(mLeft, mRight) + 1
}
// @lc code=end
