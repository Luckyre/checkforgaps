/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 *
 * https://leetcode.cn/problems/arranging-coins/description/
 *
 * algorithms
 * Easy (45.07%)
 * Likes:    305
 * Dislikes: 0
 * Total Accepted:    137.4K
 * Total Submissions: 304.9K
 * Testcase Example:  '5'
 *
 * 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
 *
 * 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 5
 * 输出：2
 * 解释：因为第三行不完整，所以返回 2 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 8
 * 输出：3
 * 解释：因为第四行不完整，所以返回 3 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  // 1
  // 2  3
  // 3  6
  // 4  10
  // 5  15
  //13
  //
  // total= k*(k+1)/2
  //二分法查找
  let left = 1,
    right = n //13
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left //7  4
    if (mid * (mid + 1) <= 2 * n) {
      //7*8<=2*13 // 4*5<=2*13
      left = mid //7
      //&& 7*8<=2*13   //4
    } else {
      right = mid - 1 //6
    }
    return left // 4
  }
}

// @lc code=end
