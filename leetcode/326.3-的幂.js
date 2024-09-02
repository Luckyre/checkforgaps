/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 *
 * https://leetcode.cn/problems/power-of-three/description/
 *
 * algorithms
 * Easy (51.62%)
 * Likes:    337
 * Dislikes: 0
 * Total Accepted:    248K
 * Total Submissions: 479.8K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
 *
 * 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3^x
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 27
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 0
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 9
 * 输出：true
 *
 *
 * 示例 4：
 *
 *
 * 输入：n = 45
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
 * 进阶：你能不使用循环或者递归来完成本题吗？
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 首先，我们需要理解一个概念：3 的幂次方。
  // 3 的幂次方指的是一个正整数，它可以表示为 3 的幂次的乘积。例如，3^0 = 1，3^1 = 3，3^2 = 9，3^3 = 27，等等。
  // 因此，我们可以通过将给定的正整数除以 3 直到余数不为 0 或者商为 1 来判断它是否为 3 的幂次方。

  while (n !== 0 && n % 3 === 0) {
    n = Math.floor(n / 3)
  }
  return n === 1
}

// @lc code=end
