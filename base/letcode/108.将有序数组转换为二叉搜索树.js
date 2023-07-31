/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // [-10,-3,0,5,9]
  const buildBST = (name, start, end) => {
    if (start > end) {
      return null
    }

    const midIndex = (start + end) >>> 1 //获取中间索引 //2
    const root = new TreeNode(nums[midIndex]) // 构建当前root节点  //0
    root.left = buildBST(nums, start, midIndex - 1) // [0,1]
    root.right = buildBST(nums, midIndex + 1, end) // 构建右子树 [3,4]
    return root
  }
  return buildBST(nums, 0, nums.length - 1)
}
// @lc code=end
