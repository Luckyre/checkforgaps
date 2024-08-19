/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 *
 * https://leetcode.cn/problems/power-of-two/description/
 *
 * algorithms
 * Easy (49.82%)
 * Likes:    693
 * Dislikes: 0
 * Total Accepted:    349.7K
 * Total Submissions: 701.9K
 * Testcase Example:  '1'
 *
 * 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
 *
 * 如果存在一个整数 x 使得 n == 2^x ，则认为 n 是 2 的幂次方。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 1
 * 输出：true
 * 解释：2^0 = 1
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 16
 * 输出：true
 * 解释：2^4 = 16
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 3
 * 输出：false
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
 *
 *
 * 进阶：你能够不使用循环/递归解决此问题吗？
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function (n) {
//   return n > 0 && (n & (n - 1)) == 0
// }
//通过位预算符来判断
// 2的幂次方在二进制下，只有一位是1，其余全是0。
// 2的幂次方-1，则是除了最高位的1，其余全是1。

var isPowerOfTwo = function (n) {
  // 通过约数来判断
  const BIG = 1 << 31 //2的31次方
  // 2的31次方除以2的幂次方，余数为0

  return n > 0 && BIG % n == 0
}

// @lc code=end
