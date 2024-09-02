/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //ab_a
  let filterString = ''
  for (let i = 0; i < s.length; i++) {
    //4
    let c = s.charAt(i)
    if (/[a-zA-Z0-9]/.test(c)) {
      //先把所有字符转化成小写，并过滤掉空格与标点字符
      filterString += c.toLowerCase()
    }
  }
  //abc
  //然后通过双指针 相对而行判断是否是回文字
  let left = 0,
    right = filterString.length - 1
  while (left < right) {
    //左指针向右，右指针向左，相向而行
    if (filterString.charAt(left) != filterString.charAt(right)) {
      return false
    }
    left++
    right--
  }
  return true
}
// @lc code=end
