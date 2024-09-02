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
  // 维护 val -> index 的映射
  var valToIndex = new Map()
  for (var i = 0; i < nums.length; i++) {
    // 查表，看看是否有能和 nums[i] 凑出 target 的元素
    var need = target - nums[i]
    if (valToIndex.has(need)) {
      return [valToIndex.get(need), i]
    }
    // 存入 val -> index 的映射
    valToIndex.set(nums[i], i)
  }
  return null
}
// @lc code=end
