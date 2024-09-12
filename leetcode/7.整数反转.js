/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode.cn/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (35.54%)
 * Likes:    4018
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 3.7M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 *
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 123
 * 输出：321
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = -123
 * 输出：-321
 *
 *
 * 示例 3：
 *
 *
 * 输入：x = 120
 * 输出：21
 *
 *
 * 示例 4：
 *
 *
 * 输入：x = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 117
  let res = 0
  while (x !== 0) {
    const digit = x % 10 //取末尾数字 digit=7  digit=1  digit=1
    x = ~~(x / 10) // 去掉末尾数字 x=117/10 = 11 x=11/10 = 1 x=1/10 = 0
    if (res > 214748364 || (res == 214748364 && digit > 7)) {
      // 2^31 - 1 = 2147483647
      // 如果结果 大于2^31 - 1 或者 等于2^31 - 1 并且 末尾数字大于7
      return 0
    }

    if (res < -214748364 || (res == -214748364 && digit < -8)) {
      // 如果结果 小于-2^31 或者 等于-2^31 并且 末尾数字小于-8
      return 0
    }
    res = res * 10 + digit // 把末尾数字加到结果中 7 7*10+1 = 71 71*10+1 = 711
  }
  return res
}

// @lc code=end
