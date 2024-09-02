/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  //4
  const res = []
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1) // [1], [1,1], [1,1,1]
    for (let j = 1; j < row.length - 1; j++) {
      //
      row[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(row) //[[1],[1,1]]
  }
  return res
}
// @lc code=end
