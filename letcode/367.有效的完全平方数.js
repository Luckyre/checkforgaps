/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode.cn/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (45.00%)
 * Likes:    580
 * Dislikes: 0
 * Total Accepted:    286.2K
 * Total Submissions: 635.5K
 * Testcase Example:  '16'
 *
 * 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 *
 * 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
 *
 * 不能使用任何内置的库函数，如  sqrt 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num = 16
 * 输出：true
 * 解释：返回 true ，因为 4 * 4 = 16 且 4 是一个整数。
 *
 *
 * 示例 2：
 *
 *
 * 输入：num = 14
 * 输出：false
 * 解释：返回 false ，因为 3.742 * 3.742 = 14 但 3.742 不是一个整数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  //方法一 使用内置函数
  const x = Math.floor(Math.sqrt(num))
  return x * x === num
}

var isPerfectSquare2 = function (num) {
  // 方法二 暴力执行遍历，如果从1开始一直遍历到平方根等于num
  let x = 1,
    square = 1
  while (square <= num) {
    if (square === num) {
      return true
    }
    x++
    square = x * x
  }
  return false
}

var isPerfectSquare3 = function (num) {
  //16
  // 方法三 二分查找，通过从[1,num]范围去查找
  let left = 0,
    right = num //16
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left // 求中间节点 //8 //3 //4
    const square = mid * mid // 8*8=64 3*3=9 4*4=16

    if (square === num) {
      return true
    } else if (square < num) {
      left = mid + 1 //4
    } else {
      right = mid - 1 //7
    }
  }
  return false
}

// @lc code=end
