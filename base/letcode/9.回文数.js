/*
 * @Author: XinAn
 * @Date: 2023-05-23 08:43:07
 * @LastEditors: lucklyrs
 * @LastEditTime: 2024-05-27 16:23:06
 * @Description: file content
 * @FilePath: \letcode\9.回文数.js
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    // 负数不是回文数
    return false
  }
  let reversed = 0
  let original = x //121
  while (original > 0) {
    reversed = reversed * 10 + (original % 10) // 0*10 + 121%10 = 1     1*10 +12%10 = 12   12*10+(1%10) = 121
    original = Math.floor(original / 10) //  12  1   0
  }
  return x === reversed // true
}

console.log(isPalindrome(121))
// @lc code=end
