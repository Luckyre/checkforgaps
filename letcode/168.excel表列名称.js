/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // 28
  const res = []
  while (columnNumber !== 0) {
    //fromCharCode   UTF-16 代码单元序列创建的字符串
    columnNumber--
    res.push(String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt()))
    columnNumber = Math.floor(columnNumber / 26)
  }
  return res.reverse().join('')
}
// @lc code=end
