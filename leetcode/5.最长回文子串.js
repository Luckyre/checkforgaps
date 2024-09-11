/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (38.62%)
 * Likes:    7330
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 4.6M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // babad
  let sLength = s.length,
    left = 0,
    right = 0,
    len = 1, // 窗口大小
    maxStart = 0,
    maxLen = 0

  if (s == null || sLength == 0) {
    return ''
  }

  for (let i = 0; i < sLength; i++) {
    // 遍历每个位置，当做中心位置
    // 中心位置可能是一个，可能是两个
    left = i - 1 //
    right = i + 1
    while (left >= 0 && s.charAt(left) == s.charAt(i)) {
      // 向左扩展
      len++
      left--
    }
    while (right < sLength && s.charAt(right) == s.charAt(i)) {
      // 向右扩展
      len++
      right++
    }
    while (left >= 0 && right < sLength && s.charAt(right) == s.charAt(left)) {
      // 同时扩展
      len += 2
      left--
      right++
    }
    if (len > maxLen) {
      maxLen = len
      maxStart = left
    }
    len = 1
  }
  return s.substring(maxStart + 1, maxStart + maxLen + 1)
}

var longestPalindrome2 = function (s) {
  // s = babad
  // 中心扩展法
  if (!s || s.length === 0) {
    return ''
  }
  let start = 0,
    maxLength = 1

  function expandAroundCenter(left, right) {
    //babad
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        // 2-0+1>1
        maxLength = right - left + 1 //2
        start = left //0
      }
      left--
      right++
    }
  }
  // 遍历字符串的每个字符，考虑奇数长度回文
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i) //0,2
  }

  // 遍历字符串的每个字符之间的空隙，考虑偶数长度回文
  for (let i = 0; i < s.length - 1; i++) {
    expandAroundCenter(i, i + 1) //
  }

  return s.substring(start, start + maxLength) //s(0,2) = 'bab'
}
// @lc code=end
