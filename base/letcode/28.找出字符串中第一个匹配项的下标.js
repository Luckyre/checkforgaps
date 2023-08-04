/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 'this is abc'  , 'abc'
  const n = haystack.length, // 11
    m = needle.length //3
  for (let i = 0; i + m <= n; i++) {
    // 8
    let flag = true
    for (let j = 0; j < m; j++) {
      //3 j<3
      if (haystack[i + j] != needle[j]) {
        //
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return -1
}
// @lc code=end
