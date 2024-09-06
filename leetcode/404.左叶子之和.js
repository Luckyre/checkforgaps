/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode.cn/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (63.17%)
 * Likes:    733
 * Dislikes: 0
 * Total Accepted:    325K
 * Total Submissions: 514.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入: root = [3,9,20,null,null,15,7]
 * 输出: 24
 * 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 *
 *
 * 示例 2:
 *
 *
 * 输入: root = [1]
 * 输出: 0
 *
 *
 *
 *
 * 提示:
 *
 *
 * 节点数在 [1, 1000] 范围内
 * -1000 <= Node.val <= 1000
 *
 *
 *
 *
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
var sumOfLeftLeaves = function (root) {
  // 方法一 深度优先搜索

  // 递归
  const def = (node) => {
    let ans = 0
    if (node.left != null) {
      // 左节点是叶子节点, 直接返回左节点的值, 否则递归

      ans += isLeafNode(node.left) ? node.left.val : def(node.left)
    }
    if (node.right != null && !isLeafNode(node.right)) {
      //右节点不是叶子节点时，递归
      ans += def(node.right)
    }
    return ans
  }
  // 判断是否是叶子节点, 叶子节点是没有左右子节点
  const isLeafNode = (node) => {
    return node.left == null && node.right == null
  }

  if (root == null) {
    return 0
  }
  return def(root)
}

var sumOfLeftLeaves = function (root) {
  //  方法二 广度优先搜索
  if (!root) return 0
  let queue = [root]
  let ans = 0
  while (queue.length) {
    let node = queue.shift() // 从队列中取出节点
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        //如果左节点是叶子节点
        ans += node.left.val
      } else {
        //如果左节点不是叶子节点,将左节点放入队列
        queue.push(node.left)
      }
    }
    if (node.right) {
      //如果右节点是叶子节点，不累加，否则将右节点放入队列
      if (!node.right.left && !node.right.right) {
      } else {
        queue.push(node.right)
      }
    }
  }
  return ans
}
// @lc code=end
