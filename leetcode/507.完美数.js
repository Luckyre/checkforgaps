/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 *
 * https://leetcode.cn/problems/perfect-number/description/
 *
 * algorithms
 * Easy (49.31%)
 * Likes:    208
 * Dislikes: 0
 * Total Accepted:    89.9K
 * Total Submissions: 182.4K
 * Testcase Example:  '28'
 *
 * 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。
 *
 * 给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num = 28
 * 输出：true
 * 解释：28 = 1 + 2 + 4 + 7 + 14
 * 1, 2, 4, 7, 和 14 是 28 的所有正因子。
 *
 * 示例 2：
 *
 *
 * 输入：num = 7
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num <= 10^8
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  // 28 方法一:枚举
  if (num === 1) return false
  let sum = 1
  for (let i = 2; i <= num / 2; i++) {
    // 由于一个数的因子不会大于它的一半（除了它自身），
    //所以我们只需要遍历到该数的一半即可。
    // i<=14
    if (num % i === 0) {
      //  i =2, 28%2==0  sum = 1+2 = 3;
      //  i=4, 28%4==0 sum=3+4=7;
      //  i=7, 28%7==0 sum=7+7=14;
      //  i=14, 28%14==0 sum=14+14=28;
      sum += i
    }
  }
  return sum === num // 28===28  true
}

var checkPerfectNumber2 = function (num) {
  //方法二 数学 在1 <= num <= 10^8范围中，偶完全数有
  return (
    num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336
  )
}
// @lc code=end
