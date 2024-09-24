/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 *
 * https://leetcode.cn/problems/base-7/description/
 *
 * algorithms
 * Easy (51.95%)
 * Likes:    223
 * Dislikes: 0
 * Total Accepted:    99K
 * Total Submissions: 190.5K
 * Testcase Example:  '100'
 *
 * 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: num = 100
 * 输出: "202"
 *
 *
 * 示例 2:
 *
 *
 * 输入: num = -7
 * 输出: "-10"
 *
 *
 *
 *
 * 提示：
 *
 *
 * -10^7 <= num <= 10^7
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  //100
  if (num === 0) {
    return '0'
  }
  let negative = num < 0 // -100
  num = Math.abs(num) // 100
  const digits = []
  while (num > 0) {
    digits.push(num % 7) //100%7=2 14%7=0 2%7=2
    num = Math.floor(num / 7) //14 2 0
  }
  if (negative) {
    digits.push('-') //   202-
  }
  return digits.reverse().join('') //
}
// @lc code=end
