/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 *
 * https://leetcode.cn/problems/missing-number/description/
 *
 * algorithms
 * Easy (67.29%)
 * Likes:    837
 * Dislikes: 0
 * Total Accepted:    364K
 * Total Submissions: 540.5K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,0,1]
 * 输出：2
 * 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：2
 * 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 *
 * 示例 3：
 *
 *
 * 输入：nums = [9,6,4,2,3,5,7,0,1]
 * 输出：8
 * 解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
 *
 * 示例 4：
 *
 *
 * 输入：nums = [0]
 * 输出：1
 * 解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 10^4
 * 0 <= nums[i] <= n
 * nums 中的所有数字都 独一无二
 *
 *
 *
 *
 * 进阶：你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //解法一 排序
  //1.通过判断有多少数字
  //2.通过数字sort排序，
  //3.遍历数组的下表对应得值，[nums][0] =0,
  nums = nums.sort((a, b) => a - b)
  //   if (nums.length === 0) {
  //     return 0
  //   }
  //   if (nums.length === 1) {
  //     if (nums[0] === 1) {
  //       return 0
  //     } else {
  //       return 1
  //     }
  //   }
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return nums.length
}

// 解法二： 哈希集合
var missingNumber = function (nums) {
  //先把集合放入哈希表集合
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i
    }
  }
}
// @lc code=end
