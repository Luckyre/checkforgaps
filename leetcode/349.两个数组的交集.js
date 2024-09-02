/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode.cn/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (74.79%)
 * Likes:    931
 * Dislikes: 0
 * Total Accepted:    601.1K
 * Total Submissions: 803K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 方法一
  // 创建两个循环通过元素循环遍历
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && res.indexOf(nums1[i]) === -1) {
        res.push(nums1[i])
      }
    }
  }
  return res
}

var intersection2 = function (nums1, nums2) {
  //方法二， 哈希表

  function set_intersection(set1, set2) {
    if (set1.size > set2.size) {
      return set_intersection(set2, set1)
    }
    const intersection = new Set()
    for (const item of set1) {
      if (set2.has(item)) {
        intersection.add(item)
      }
    }
    return [...intersection]
  }

  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  set_intersection(set1, set2)
}

// @lc code=end
