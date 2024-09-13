/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (65.96%)
 * Likes:    1334
 * Dislikes: 0
 * Total Accepted:    326.8K
 * Total Submissions: 495.1K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums
 * 中的数字，并以数组的形式返回结果。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,1]
 * 输出：[2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1
 * 1
 *
 *
 * 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  //思路
  // 先通过定义一个 nums长的数组，遍历i,如果nums中没有i值，且在result结果中新增
  // Time Limit Exceeded
  //   const numsLength = nums.length
  //   const result = []
  //   for (let i = 1; i <= numsLength; i++) {
  //     if (nums.indexOf(i) === -1) {
  //       result.push(i)
  //     }
  //   }
  //   return result

  //   方法一：遍历寻找 1−n 是否在数组中存在
  // 通过 set 方法，将数组中的值放入set中，然后遍历 1-n ，如果set中没有，就将值放入结果数组中
  // 时间复杂度：O(n) 空间复杂度：O(n)
  let numSet = new Set(nums)
  let numsLength = nums.length
  let result = []
  for (let i = 1; i <= numsLength; i++) {
    if (!numSet.has(i)) {
      result.push(i)
    }
  }
  return result
}

var findDisappearedNumbers = function (nums) {
  //方法二：数组的原地操作  空间复杂度：O(1)
  // 思路：遍历数组，将数组中的值作为索引，将对应索引的值改为负数，
  //最后遍历数组，值为正数的索引就是缺失的数字
  // [4,3,2,7,8,2,3,1]
  let numsLength = nums.length //8
  for (let i = 0; i < numsLength; i++) {
    let newIndex = Math.abs(nums[i]) - 1 //3 2

    if (nums[newIndex] > 0) {
      // nums[3] =7 >0  nums[2] =2 >0
      nums[newIndex] *= -1
    }
  }
  ////[-4,-3,-2,-7,8,2,-3,-1]

  let result = []
  for (let i = 1; i <= numsLength; i++) {
    if (nums[i - 1] > 0) {
      result.push(i) //5,6
    }
  }
  return result
}
// @lc code=end
