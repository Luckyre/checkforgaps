/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // 排序
  nums.sort((a, b) => a - b)

  let start = 0,
    end = nums.length - 1
  //循环对比 移动指针
  while (start < end) {
    let sum = nums[start] + nums[end]
    if (sum < target) {
      start++
    } else if (sum > target) {
      end--
    } else if (sum === target) {
      return [nums[start], nums[end]]
    }
  }
  return []
}

// @lc code=end
