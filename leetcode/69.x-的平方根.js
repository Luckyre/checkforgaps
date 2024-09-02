/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1,
    right = x
  while (left <= right) {
    // >>运算结果正好能对应一个整数的二分之一值，这就正好能代替数学上的除2运算，但是比除2运算要快
    let mid = left + ((right - left) >> 1) // 相当于mid=(left+right)/2
    // 中间值 mid的平方 是否小于x
    if (mid <= x / mid) {
      // 中间值 mid +1是否 大于 x
      if (mid + 1 > x / (mid + 1)) {
        return mid
      }
      // 如果mid的平方小于x,且mid+1小于x, 那就是在mid+1 到x范围搜索
      left = mid + 1
    } else {
      // 如果mid的平方大于x,则x的平方根小于mid,接下来在 [x,mid-1]的范围搜索
      right = mid - 1
    }
  }
  // 如果入参是0
  return 0
}
// @lc code=end
