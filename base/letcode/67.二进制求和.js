/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // '11001', '101'
  a = a.split('').reverse().join('') // '10011'
  b = b.split('').reverse().join('') // '101'

  let sumAB = ''
  const m = a.length, //5
    n = b.length // 3
  //记录进位
  let carry = 0
  let i = 0
  while (i < Math.max(m, n) || carry > 0) {
    let val = carry //0
    val += i < m ? parseInt(a.charAt(i)) : 0 // 1  0  0  1  1  //
    val += i < n ? parseInt(b.charAt(i)) : 0 // 1  0  1  0  0  //不够就补0
    sumAB += val % 2 //1
    carry = Math.floor(val / 2) // 0  0  0 0
    i++ // 1 2 3 4 5
  }
  return sumAB.split('').reverse().join('')
}
// @lc code=end
