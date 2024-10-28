/*
 * @lc app=leetcode.cn id=566 lang=javascript
 * @lcpr version=20002
 *
 * [566] 重塑矩阵
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // 不太理解
  //  [[1,2],[3,4]], r = 1, c = 4
  // 二维数组
  const m = mat.length //2
  const n = mat[0].length //2
  if (m * n !== r * c) return mat //2*2 !== 1*4
  let res = new Array(r).fill(0).map(() => new Array(c).fill(0)) //res => [[0,0,0,0],[0,0,0,0]]
  for (let i = 0; i < m * n; i++) {
    res[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n]
  }
  return res
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2],[3,4]]\n1\n4\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,4]]\n2\n4\n
// @lcpr case=end

 */
