/*
 * @lc app=leetcode.cn id=575 lang=javascript
 * @lcpr version=20003
 *
 * [575] 分糖果
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
//  set
var distributeCandies = function (candyType) {
  // 通过对candyType去重 得到糖果的种类
  // 然后通过比较糖果的种类和n/2的大小，获取最小值
  let set = new Set(candyType)
  let n = candyType.length
  return Math.min(set.size, n / 2)
}

var distributeCandies = function (candyType) {
  // 通过排序
  // 然后通过比较相邻的糖果种类，获取最小值
  candyType.sort((a, b) => a - b)
  let count = 1
  for (let i = 1; i < candyType.length && count < candyType.length / 2; i++) {
    if (candyType[i] > candyType[i - 1]) {
      count++
    }
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,2,2,3,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [6,6,6,6]\n
// @lcpr case=end

 */
