/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *
 * https://leetcode.cn/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (55.32%)
 * Likes:    1098
 * Dislikes: 0
 * Total Accepted:    870.7K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,1]
 * 输出：true
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4]
 * 输出：false
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,1,1,3,3,4,3,2,4,2]
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   //先做排序 然后在遍历比对
//   nums.sort((a, b) => a - b)
//   const numsList = nums.length
//   for (let i = 0; i < numsList - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return true
//     }
//   }
//   return false
// }

// 通过哈希表 将一个元素插入哈希表时，若存在时则判断重复

var containsDuplicate = function (nums) {
  const set = new Set()
  for (const x of nums) {
    if (set.has(x)) {
      return true
    }
    set.add(x)
  }
  return false
}
// @lc code=end
