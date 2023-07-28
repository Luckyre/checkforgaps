/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  // 最大的深度就是二叉树的层数
  let height = 0,
    queue = []
  queue.push(root)
  if (root === null) {
    return 0
  }
  while (queue.length) {
    let length = queue.length
    height++
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      // 当左,右节点存在值时
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return height
}
// @lc code=end
