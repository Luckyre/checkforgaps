/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 *
 * https://leetcode.cn/problems/next-greater-element-i/description/
 *
 * algorithms
 * Easy (72.16%)
 * Likes:    1203
 * Dislikes: 0
 * Total Accepted:    340.1K
 * Total Submissions: 471.1K
 * Testcase Example:  '[4,1,2]\n[1,3,4,2]'
 *
 * nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
 *
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。
 *
 * 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定
 * nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。
 *
 * 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出：[-1,3,-1]
 * 解释：nums1 中每个值的下一个更大元素如下所述：
 * - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 * - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
 * - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出：[3,-1]
 * 解释：nums1 中每个值的下一个更大元素如下所述：
 * - 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
 * - 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length <= nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 10^4
 * nums1和nums2中所有整数 互不相同
 * nums1 中的所有整数同样出现在 nums2 中
 *
 *
 *
 *
 * 进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 方法一  双循环 暴力解法
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    //把nums1中的元素 在nums 中查询 ，找到位置
    let index = nums2.indexOf(nums1[i])
    for (let j = index; j < nums2.length; j++) {
      //从该位置开始遍历，查询是否有元素是大于该元素的,没有则返回-1
      if (nums2[j + 1] > nums1[i]) {
        res.push(nums2[j + 1])
        break
      } else if (j === nums2.length - 1) {
        res.push(-1)
        break
      }
    }
  }
  return res
}

var nextGreaterElement2 = function (nums1, nums2) {
  //nums1 = [4,1,2], nums2 = [1,3,4,2]
  // 方法二 单调栈
  // 1，创建一个栈，遍历nums2
  // 2，栈为空，入栈，
  // 3，栈不为空，判断栈顶元素是否小于当前元素，如果小于，栈顶元素的下一个更大元素就是当前元素，出栈，继续判断栈顶元素是否小于当前元素，直到栈为空或者栈顶元素大于当前元素，入栈
  // 4，遍历完nums2，栈中剩余的元素的下一个更大元素都是-1
  // 5，遍历nums1，查询nums2中每个元素的下一个更大元素，返回结果
  let stack = []
  let map = new Map()
  for (let i = nums2.length - 1; i >= 0; i--) {
    // i=3, nums2[3]=2; i=2, nums2[2]=4; i=1, nums2[1]=3; num2[0]=1
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      //2<4 4>3 1<3
      stack.pop() //[]
    }
    // {2:-1}; {2:-1,4:-1} {2::-1,4:-1,3:4,1:3}
    // stack[stack.length - 1] 栈顶
    map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1)
    stack.push(nums2[i]) //[2],[4,3], [4,3,1]
  }
  return nums1.map((item) => map.get(item))
}
// @lc code=end
