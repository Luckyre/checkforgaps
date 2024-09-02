/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 初始化左指针为0，右指针为nums最后一个元素
  let left = 0,
    right = nums.length - 1, // 3
    middle = 0
  // 当left>right证明比对完成数组元素，跳出循环

  //   [1,2,4,6],3,

  while (left <= right) {
    // 0 < 3  3<3
    // 计算中间指针位置
    middle = Math.floor((left + right) / 2) // 2   3
    // 如果middle所指值等于target，直接返回其位置
    if (nums[middle] == target) return middle
    // nums[2]=>  =4 <5    nums[3]=> 6>5
    // 如果middle所指值大于target，由于数组为升序，
    // nums[middle]>target，证明区间[middle,right]
    // 元素都大于target，因此舍去，继续在[left,middle-1]
    // 区间二分查找
    if (nums[middle] > target) right = middle - 1 //  [3,2]
    // 反之nums[middle]<target，由于数组为升序，
    // 证明区间[left,middle]元素都小于target，因此
    // 社区，继续在[middle+1,right]区间二分查找
    else left = middle + 1 // [3,3]
  }

  // 如果未找到相等元素，则此时middle为其最接近的元素
  // 如果nums[middle]<target,则在middle+1插入target即可
  // 如果nums[middle]>target,则在middle插入target即可
  return nums[middle] > target ? middle : middle + 1 //nums[3]>5 d  3
}
// @lc code=end
