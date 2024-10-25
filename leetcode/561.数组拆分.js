/*
 * @lc app=leetcode.cn id=561 lang=javascript
 * @lcpr version=20002
 *
 * [561] 数组拆分
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  //数组排序 然后分化成n组,每组取最小值相加， 取2n值累加即可
  nums.sort((a, b) => a - b)
  let sum = 0
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }
  return sum
}
// @lc code=end

/*
// @lcpr case=start
// [1,4,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [6,2,6,5,1,2]\n
// @lcpr case=end

 */
