/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode.cn/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (60.50%)
 * Likes:    5106
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.3M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 *
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 返回容器可以储存的最大水量。
 *
 * 说明：你不能倾斜容器。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 * 示例 2：
 *
 *
 * 输入：height = [1,1]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //[1,8,6,2,5,4,8,3,7]
  // 通过双指针 来实现
  // 双指针  左右指针
  let left = 0,
    right = height.length - 1, //8
    max = 0
  while (left < right) {
    //1<8
    // 计算左右指针的面积
    let area = Math.min(height[left], height[right]) * (right - left) // Math.min(1,8)*8  Math.min(8,7)*(8-1)

    // 计算最大面积
    max = Math.max(max, area) //8
    // 移动指针
    if (height[left] <= height[right]) {
      // 1<=8
      //左指针比右指针的值小  左指针右移  反之 右指针左移
      left++ //1
    } else {
      right-- // 右指针左移
    }
  }
  return max
}
// @lc code=end
