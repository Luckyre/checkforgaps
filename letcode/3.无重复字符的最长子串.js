/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 'abcabcbb'
  let window = new Map()
  let left = 0,
    right = 0,
    res = 0
  while (right < s.length) {
    // 8
    let c = s[right] // a
    right++ // 1
    // 进行窗口内的数据更新
    window.set(c, (window.get(c) || 0) + 1)
    //判断左侧窗口是否需要收缩
    while (window.get(c) > 1) {
      let d = s[left]
      left++
      window.set(d, window.get(d) - 1)
    }
    res = Math.max(res, right - left)
  }
  return res
}
// @lc code=end
