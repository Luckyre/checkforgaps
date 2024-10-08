/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 *
 * https://leetcode.cn/problems/add-digits/description/
 *
 * algorithms
 * Easy (70.49%)
 * Likes:    684
 * Dislikes: 0
 * Total Accepted:    202.9K
 * Total Submissions: 287.9K
 * Testcase Example:  '38'
 *
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: num = 38
 * 输出: 2
 * 解释: 各位相加的过程为：
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * 由于 2 是一位数，所以返回 2。
 *
 *
 * 示例 2:
 *
 *
 * 输入: num = 0
 * 输出: 0
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= num <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你可以不使用循环或者递归，在 O(1) 时间复杂度内解决这个问题吗？
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 将当前的最低位数加到总和中，其他位数除以10
  // 388
  while (num >= 10) {
    let sum = 0
    while (num > 0) {
      //388 //19 1

      sum += num % 10 //sum=8; sum=8+8=16; sum=16+3=19   sum=9 sum= 10

      num = Math.floor(num / 10) //num=38 num=3  num=1
    }
    num = sum //num=19 num= 10
  }
  return num
}
addDigits(388)
// 不太理解
var addDigits = function (num) {
  //38
  if (num === 0) {
    return 0
  } else {
    return num % 9 == 0 ? 9 : num % 9
  }
}
// @lc code=end
