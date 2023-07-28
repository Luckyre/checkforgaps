/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  // 使用递归遍历左右子树，递归
  //确认递归的参数，root.left,root.right和返回值true,false
  const compareNode = function (left, right) {
    //比较左右树节点  确认终止条件，空的情况
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false
    } else if (left === null && right === null) {
      return true
    } else if (left.val !== right.val) {
      return false
    }
    // 确认单层递归逻辑
    let outSide = compareNode(left.left, right.right)
    let inSide = compareNode(left.right, right.left)
    return outSide && inSide //比较左子树与右子树是否对应
  }
  return compareNode(root.left, root.right)
}
// @lc code=end
