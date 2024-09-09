/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode.cn/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.62%)
 * Likes:    612
 * Dislikes: 0
 * Total Accepted:    208.7K
 * Total Submissions: 375.4K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的 回文串 的长度。
 *
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入:s = "abccccdd"
 * 输出:7
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 *
 *
 * 示例 2:
 *
 *
 * 输入:s = "a"
 * 输出:1
 * 解释：可以构造的最长回文串是"a"，它的长度是 1。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length <= 2000
 * s 只由小写 和/或 大写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // 不理解 下次重做
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }
  let res = 0
  let flag = false
  for (let [key, val] of map) {
    if (val % 2 === 0) {
      res += val
    } else {
      res += val - 1
      flag = true
    }
  }
  return flag ? res + 1 : res
}
// @lc code=end
