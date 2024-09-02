/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //4
  const dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    // 爬到第 n 级台阶的方法个数等于爬到 n - 1 的方法个数和爬到 n - 2 的方法个数之和。
    dp[i] = dp[i - 1] + dp[i - 2]
    // d[2]= d[1]+d[0]= 2    d[3]=d[2]+dp[1] = 3  d[4]= dp[3]+dp[2] = 5
  }
  return dp[n]
}
// @lc code=end
