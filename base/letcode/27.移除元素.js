/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 通过双指针的比较
var removeElement = function (nums, val) {
  let slow = 0,
    fast = 0
  while (fast < nums.length) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}
// @lc code=end
