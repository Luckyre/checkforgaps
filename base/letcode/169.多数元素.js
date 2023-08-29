/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //排序数组，若一个数字中的数字出现频率大于n>2, 则在数组中 nums.lneght>2的位置就是这个数
  nums.sort((a, b) => {
    // [3,2,3]
    a - b
  })
  //[2,3,3]
  return nums[Math.floor(nums.length / 2)]
}
// @lc code=end
