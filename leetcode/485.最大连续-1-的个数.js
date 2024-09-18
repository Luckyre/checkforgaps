/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 *
 * https://leetcode.cn/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (61.49%)
 * Likes:    442
 * Dislikes: 0
 * Total Accepted:    254.1K
 * Total Submissions: 412.9K
 * Testcase Example:  '[1,1,0,1,1,1]'
 *
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,0,1,1,1]
 * 输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 *
 *
 * 示例 2:
 *
 *
 * 输入：nums = [1,0,1,1,0,1]
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * nums[i] 不是 0 就是 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // 通过遍历数组 记录当前的最大连续1的个数
  // 当遇到1时，将当前得最大连续1的个数加1
  // 当遇到0时，将当前得最大连续1的个数与之前的最大连续1的个数进行比较，取最大值，并将当前得最大连续1的个数重置为0
  // 当遇到数组的最后一个元素时，将当前得最大连续1的个数与之前的最大连续1的个数进行比较

  let max = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      max = Math.max(max, count)
      count = 0
    }
    if (i === nums.length - 1) {
      max = Math.max(max, count)
    }
  }
  return max
}
// @lc code=end
