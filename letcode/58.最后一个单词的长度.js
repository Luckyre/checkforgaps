/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // ”   fly me  to the moon  “
  let end = s.length - 1 // 23
  while (end > 0 && s[end] == ' ') end-- //23 22  s[21] ='n'
  if (end < 0) return 0
  let start = end // 21
  while (start >= 0 && s[start] != ' ') start-- //21 20 19 18  17=''
  return end - start // 21-17 4
}
// @lc code=end
