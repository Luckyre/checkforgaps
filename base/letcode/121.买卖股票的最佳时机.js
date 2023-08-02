/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 取最左边最小值，取最右边最大值，然后等到的差值就是最大利润
  // [7,1,5,3,6,4]
  if (prices.length === 0) return 0

  // 最低买点
  let min = prices[0] // 7
  // 最大收入
  let max = 0

  for (let p of prices) {
    min = Math.min(min, p) //7,1,1,1,
    max = Math.max(max, p - min) //0 1,4,5,
  }

  return max
}
// @lc code=end
