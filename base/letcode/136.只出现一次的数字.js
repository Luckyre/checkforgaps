/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // [2,2,1]
  let ans = 0
  for (let n of nums) {
    ans ^= n // ans= n^0=2  ans= 2^2=0
  }
  return ans
}
// @lc code=end
