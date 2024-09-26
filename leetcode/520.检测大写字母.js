/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 *
 * https://leetcode.cn/problems/detect-capital/description/
 *
 * algorithms
 * Easy (57.47%)
 * Likes:    290
 * Dislikes: 0
 * Total Accepted:    117.5K
 * Total Submissions: 204.4K
 * Testcase Example:  '"USA"'
 *
 * 我们定义，在以下情况时，单词的大写用法是正确的：
 *
 *
 * 全部字母都是大写，比如 "USA" 。
 * 单词中所有字母都不是大写，比如 "leetcode" 。
 * 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
 *
 *
 * 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word = "USA"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：word = "FlaG"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= word.length <= 100
 * word 由小写和大写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // 1，遍历word字符串，通过的小写a和z字母的unicode值
  let count = 0
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i) // 'g'.charCodeAt(0) = 103
    // 判断是否是大写字母
    if (charCode >= 65 && charCode <= 90) {
      count++
    }
  }
  if (
    count === 0 ||
    count === word.length ||
    (count === 1 && word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90)
  ) {
    return true
  }
  return false
}
// @lc code=end
