/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 *
 * https://leetcode.cn/problems/counting-bits/description/
 *
 * algorithms
 * Easy (78.82%)
 * Likes:    1338
 * Dislikes: 0
 * Total Accepted:    345.2K
 * Total Submissions: 437.8K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans
 * 作为答案。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：[0,1,1]
 * 解释：
 * 0 --> 0
 * 1 --> 1
 * 2 --> 10
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 5
 * 输出：[0,1,1,2,1,2]
 * 解释：
 * 0 --> 0
 * 1 --> 1
 * 2 --> 10
 * 3 --> 11
 * 4 --> 100
 * 5 --> 101
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 10^5
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 很容易就能实现时间复杂度为 O(n log n) 的解决方案，你可以在线性时间复杂度 O(n) 内用一趟扫描解决此问题吗？
 * 你能不使用任何内置函数解决此问题吗？（如，C++ 中的 __builtin_popcount ）
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // 先创建一个长度为n+1值都为0的数组res
  const res = new Array(n + 1).fill(0) // [0,0,0,0,0,0]  // [0,1,2,3,4,5] // [0,1,10,11,100,101]

  //遍历数组res,把i的二进制中有匹配1的个数赋值给res[i]
  for (let i = 1; i <= n; i++) {
    res[i] = i.toString(2).match(/1/g).length
  }
  return res

  // 1. 首先，我们创建一个长度为 n + 1 的数组 res，其中 res[i] 表示整数 i 的二进制表示中 1 的个数。
  // 2. 然后，我们从 1 开始遍历到 n，对于每个整数 i，我们将其转换为二进制表示，并统计其中 1 的个数。
  // 3. 最后，我们返回 res 数组。
}

var countBits2 = function (n) {
  //n=7   0 1 10 11 100 101 110 111 1110 1111 [0,1,1,2,1,2,2,3,3]
  //解法2
  const res = new Array(n + 1)
  res[0] = 0
  for (let i = 1; i <= n; i++) {
    //i=7
    if (i % 2 === 1) {
      //
      res[i] = res[i - 1] + 1
    } else {
      res[i] = res[i / 2] // 偶数右移一位 相当于抹去0 1的个数不变
    }
  }
  return res
}
// @lc code=end
