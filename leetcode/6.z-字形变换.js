/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode.cn/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (53.15%)
 * Likes:    2373
 * Dislikes: 0
 * Total Accepted:    718.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 *
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 *
 * string convert(string s, int numRows);
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "PAYPALISHIRING", numRows = 3
 * 输出："PAHNAPLSIIGYIR"
 *
 * 示例 2：
 *
 *
 * 输入：s = "PAYPALISHIRING", numRows = 4
 * 输出："PINALSIGYAHRPI"
 * 解释：
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "A", numRows = 1
 * 输出："A"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由英文字母（小写和大写）、',' 和 '.' 组成
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 懵逼树上懵逼果，懵逼树下你和我。
// 懵逼树下排排坐，一人一个懵逼果。
// 懵逼还有你和我，原来懵逼不止我。
// 懵逼树下懵逼魂，懵逼魂中懵逼人。
// 一人一个懵逼魂，人生懵逼最销魂。

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
// P   A   H   N
// A P L S I I G
// Y   I   R

var convert = function (s, numRows) {
  //PAYPALISHIRING 3
  if (numRows == 1) {
    // 只有一行，直接返回
    return s
  }

  const len = Math.min(s.length, numRows) // 行数 3
  const rows = [] // 每一行的字符串
  for (let i = 0; i < len; i++) {
    // 初始化每一行的字符串
    rows[i] = '' // 空字符串 ['', '', '']
  }
  let loc = 0 // 行数
  let down = false // 是否向下

  for (const char of s) {
    // 遍历字符串
    rows[loc] += char // 把字符添加到当前行  rows[0]= 'P'   rows[1]= 'A' row[2] = 'Y'  rows[1] = 'AP'  rows[0]= 'PA'  rows[1] = 'APL'

    // 到了第一行或者最后一行

    if (loc == 0 || loc == numRows - 1) {
      // 到了第一行或者最后一行
      down = !down // 改变方向
    }
    loc += down ? 1 : -1 // 向下走，loc++，向上走，loc--  1 , 2
  }

  let ans = ''
  for (const row of rows) {
    //rows =[['PAHN'], ['APLSIIG'], ['YIR']]
    // rows[0] = 'PAHN'  rows[1] = 'APLSIIG'  rows[2] = 'YIR'
    // ans = 'PAHNAPLSIIGYIR'
    ans += row
  }
  return ans
}
