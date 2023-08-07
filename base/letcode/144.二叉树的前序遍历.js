/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  let res = []
  const dfs = function (root) {
    if (root === null) return
    //先从父节点遍历， 中，左，右遍历
    res.push(root.val)
    //递归遍历左子树
    dfs(root.left)
    //递归遍历右子树
    dfs(root.right)
  }
  dfs(root)
  return res
}
// @lc code=end
