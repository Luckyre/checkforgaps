/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const traversal = (node, cnt) => {
    // 遇到叶子节点时，并且结果集为0， 直接返回
    if (cnt === 0 && !node.left && !node.right) return true

    //遇到叶子节点，但是计算结果集不为0
    if (!node.left && !node.right) return false

    // 左空节点不遍历
    if (node.left && traversal(node.left, cnt - node.left.val)) return true
    if (node.right && traversal(node.right, cnt - node.right.val)) return true

    return false
  }
  if (!root) return false
  return traversal(root, targetSum - root.val)
}
// @lc code=end
