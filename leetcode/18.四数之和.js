/*
 * @lc app=leetcode.cn id=18 lang=javascript
 * @lcpr version=20002
 *
 * [18] 四数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  //  [1,0,-1,0,-2,2]
  // 方法通过排序 +双指针
  nums.sort((a, b) => a - b)
  let res = []
  let length = nums.length //6
  if (length < 4) {
    // 不够 4 个元素
    return res
  }

  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 去重
      continue
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      // 最小的四个数大于 target
      break
    }
    if (
      nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] <
      target
    ) {
      // 最大的四个数小于 target
      continue
    }
    for (let j = i + 1; j < length - 2; j++) {
      // 第二个元素
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        // 去重
        continue
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        // 最小的四个数大于 target
        break
      }
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
        // 最大的四个数小于 target
        continue
      }
      let left = j + 1,
        right = length - 1
      while (left < right) {
        // 双指针

        const sum = nums[i] + nums[j] + nums[left] + nums[right] // 和
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) {
            // 去重
            left++
          }
          left++
          while (left < right && nums[right] === nums[right - 1]) {
            // 去重
            right--
          }
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
}
// @lc code=end

/*
// @lcpr case=start
// [1,0,-1,0,-2,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n8\n
// @lcpr case=end

 */
