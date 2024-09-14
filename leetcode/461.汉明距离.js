/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 *
 * https://leetcode.cn/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (81.97%)
 * Likes:    746
 * Dislikes: 0
 * Total Accepted:    313.2K
 * Total Submissions: 382.1K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 *
 * 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 1, y = 4
 * 输出：2
 * 解释：
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 上面的箭头指出了对应二进制位不同的位置。
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 3, y = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 1,4
  //
  //不太理解 先看注解
  //方法一   计数法
  // toString(2)以将数字转换为对应的二进制数的字符串
  //padStart() 方法用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。
  x = x.toString(2) // 1.toString(2)  1 => 1
  y = y.toString(2) // 4.toString(2)  4 => 100
  let maxLength = Math.max(x.length, y.length)
  x = x.padStart(maxLength, 0) // 1.padStart(4,0)  1 => 0001
  y = y.padStart(maxLength, 0) // 4.padStart(4,0)  4 => 0100
  let count = 0
  for (let i = 0; i < maxLength; i++) {
    if (x[i] !== y[i]) count++
  }
  return count
}

var hammingDistance2 = function (x, y) {
  //方法二  异或法
  // 异或运算 相同为0 不同为1
  // 1 ^ 4  1 => 0001  4 => 0100
  // 0101  5  右移一位 0010
  // 0001  1
  // 0100  4
  // 0001  1
  // 0000  0
  // 0010  2    右移一位 0001
  // 0001  1    右移一位 0000
  // 0000  0

  // 0011  3
  let count = 0
  let s = x ^ y //5
  while (s !== 0) {
    count += s & 1 //
    // 与运算  1 & 1 = 1  1 & 0 = 0    0 & 1 = 0  0 & 0 = 0
    s = s >> 1 // 右移一位 // 5 >> 1 = 2 0010  2>> 1 = 1 0001  1 >> 1 = 0 0000
  }
}

// @lc code=end
