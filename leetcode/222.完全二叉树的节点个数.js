/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 *
 * https://leetcode.cn/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Easy (81.83%)
 * Likes:    1166
 * Dislikes: 0
 * Total Accepted:    423.1K
 * Total Submissions: 516.7K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 *
 * 完全二叉树
 * 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h
 * 层，则该层包含 1~ 2^h 个节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,4,5,6]
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：0
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目范围是[0, 5 * 10^4]
 * 0
 * 题目数据保证输入的树是 完全二叉树
 *
 *
 *
 *
 * 进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
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

// var countNodes = function (root) {
//   // [1,2,3,4,5,6]
//   //递归版本
//   //递归算法计算二叉树节点数

//   // 1,确认递归函数参数
//   const getNodeSum = function (node) {
//     //2,确认终止条件
//     if (node === null) {
//       return 0
//     }

//     //3,确认单层递归逻辑
//     let leftNum = getNodeSum(node.left)
//     let rightNum = getNodeSum(node.right)
//     return leftNum + rightNum + 1 // 返回总的左边节点数+右边节点数+根节点数
//   }
//   return getNodeSum(root) //递归节点
// }

// var countNodes = function (root) {
//   //[1,2,3,4,5,6]
//   //迭代（层级遍历）
//   let queue = []
//   if (root === null) {
//     return 0
//   }
//   queue.push(root) // [1,2,3,4,5,6]
//   let nodeNum = 0
//   while (queue.length) {
//     //6
//     let length = queue.length
//     while (length--) {
//       //5
//       let node = queue.shift() //删除第一个元素  // [1]
//       nodeNum++ // 1
//       node.left && queue.push(node.left) //
//       node.right && queue.push(node.right)
//     }
//   }
//   return nodeNum
// }

//
var countNodes = function (root) {
  //[1,2,3,4,5,6]
  //利用完全二叉树性质
  if (root === null) {
    return 0
  }
  let leftNode = root.left
  let rightNode = root.right

  let leftDepth = 0
  let rightDepth = 0
  while (leftNode) {
    leftNode = leftNode.left
    leftDepth++
  }
  while (rightNode) {
    rightNode = rightNode.right
    rightDepth++
  }
  if (leftDepth === rightDepth) {
    //如果左节点得深度与右节点的深度一样
    return Math.pow(2, leftDepth + 1) - 1 // 2^(d+1) - 1
  }

  // 左右节点得深度不一致时
  return countNodes(root.left) + countNodes(root.right) + 1
}
// @lc code=end
