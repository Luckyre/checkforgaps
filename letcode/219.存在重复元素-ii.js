/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode.cn/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (47.16%)
 * Likes:    718
 * Dislikes: 0
 * Total Accepted:    322.4K
 * Total Submissions: 681.9K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且
 * abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,0,1,1], k = 1
 * 输出：true
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,2,3,1,2,3], k = 2
 * 输出：false
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 哈希表方式
//通过床
// var containsNearbyDuplicate = function (nums, k) {
//   const map = new Map()
//   const length = nums.length
//   for (let i = 0; i < length; i++) {
//     const num = nums[i]
//     if (map.has(num) && i - map.get(num) <= k) {
//       return true
//     }
//     map.set(num, i)
//   }
//   return false
// }

// 滑动窗口

// 不太理解 i-k-1（表示滑动窗口的开始值）下标
var containsNearbyDuplicate = function (nums, k) {
  //[1,0,1,1], k = 1
  // [1], i=1, [1,0],  i=2, [0,1], i=3, [1]
  const set = new Set()
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1])
    }
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  return false
}
// @lc code=end
