/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 后续遍历，通过先左子树，右子树，然后根节点

  let res = []
  if (root === null) return res
  res.push(...postorderTraversal(root.left))
  res.push(...postorderTraversal(root.right))
  res.push(root.val)
  return res
}
// @lc code=end
