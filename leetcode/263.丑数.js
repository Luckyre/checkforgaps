/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 *
 * https://leetcode.cn/problems/ugly-number/description/
 *
 * algorithms
 * Easy (50.20%)
 * Likes:    448
 * Dislikes: 0
 * Total Accepted:    189.7K
 * Total Submissions: 377.9K
 * Testcase Example:  '6'
 *
 * 丑数 就是只包含质因数 2、3 和 5 的正整数。
 *
 * 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 6
 * 输出：true
 * 解释：6 = 2 × 3
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：true
 * 解释：1 没有质因数，因此它的全部质因数是 {2, 3, 5} 的空集。习惯上将其视作第一个丑数。
 *
 * 示例 3：
 *
 *
 * 输入：n = 14
 * 输出：false
 * 解释：14 不是丑数，因为它包含了另外一个质因数 7 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  //6
  if (n <= 0) {
    return false
  }
  const factors = [2, 3, 5]
  for (const factor of factors) {
    while (n % factor === 0) {
      //3%3=0
      n /= factor //6/2=3  //3/3=1
    }
  }
  return n === 1

  //当 n 一直整除 2,3,5时，最后剩下为1时则是丑数
}
// @lc code=end
