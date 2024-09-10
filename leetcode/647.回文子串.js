/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 *
 * https://leetcode.cn/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (67.54%)
 * Likes:    1360
 * Dislikes: 0
 * Total Accepted:    354K
 * Total Submissions: 523.9K
 * Testcase Example:  '"abc"'
 *
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 *
 * 回文字符串 是正着读和倒过来读一样的字符串。
 *
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  //abcc
  // 回文中心点 2n-1个
  // abcc 中心点是2n-1个 a,ab,b,bc,c,cc,c

  let count = 0
  const sLength = s.length
  for (let i = 0; i < 2 * sLength - 1; i++) {
    let left = Math.floor(i / 2) //0 0 1 1 2 2 3
    let right = left + (i % 2) //0 1 1 2 2 3 3
    while (left >= 0 && right < sLength && s[left] === s[right]) {
      // 在 left 索引不小于 0 且 right 索引小于 sLength 的前提下，检查 s[left] 是否等于 s[right]
      count++
      left--
      right++
    }
  }
  return count
}
// @lc code=end
