/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (38.33%)
 * Likes:    7054
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 5.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 1，排序 +遍历+双指针
  //[-2,0,0,2,2]
  nums.sort((a, b) => a - b) //[-2,0,0,2,2]

  let res = []
  for (let i = 0; i < nums.length; i++) {
    // 通过双指针遍历, 如果和大于0,则right--,如果和小于0,则left++,如果和等于0,则将三个元素push到res中
    let left = i + 1
    let right = nums.length - 1
    if (nums[i] > 0) {
      // 如果当前元素大于0,则后面的元素都大于0,则直接跳出循环
      break
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 如果当前元素和前一个元素相等,则跳过当前元素
      continue
    }
    //双指针遍历
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        //[-2,0,2]
        //[-2,0,0,2,2]
        // i=0, nums[0]=-2, left=1, nums[1]=0, right=4, nums[4]=2
        res.push([nums[i], nums[left], nums[right]]) // [-2,0,2]
        // 跳过重复的left和right元素 避免重复得结果
        while (left < right && nums[left] === nums[left + 1]) left++ // left=2
        while (left < right && nums[right] === nums[right - 1]) right-- //right=3
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}
// @lc code=end
