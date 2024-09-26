/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode.cn/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (44.79%)
 * Likes:    1656
 * Dislikes: 0
 * Total Accepted:    585.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 *
 * 返回这三个数的和。
 *
 * 假定每组输入只存在恰好一个解。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 * 解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // [-1,2,1,-4] 1
  // 1，先排序 nums值
  // 2, 定义双指针flow,fast，通过遍历 nums,nums[i]+flow+fast 的和
  // 3, 定义一个变量，记录与 target 最小的差值
  nums = nums.sort((a, b) => a - b)
  // [-4,-1,1,2] 1
  let min = Infinity
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let flow = i + 1 // 左指针 从 i+1 开始
    let fast = nums.length - 1
    while (flow < fast) {
      let sum = nums[i] + nums[flow] + nums[fast] // -4+-1+2=-3  -4+1+1=-2
      if (sum === target) {
        return sum
      } else if (sum < target) {
        flow++
      } else {
        fast--
      }
      // 若循环nums 无法找到相等的，则返回最接近的
      if (Math.abs(sum - target) < min) {
        // -3-1=-4
        min = Math.abs(sum - target) //4 2
        res = sum //res =-3 res=-2
      }
    }
  }
  return res
}
// @lc code=end
