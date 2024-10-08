/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (65.23%)
 * Likes:    911
 * Dislikes: 0
 * Total Accepted:    530.1K
 * Total Submissions: 812.6K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 *
 * 如果可以，返回 true ；否则返回 false 。
 *
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  //aa, aab 遍历
  // ransomNote 字符在 magazine中都能找到
  if (ransomNote.length > magazine.length) return false
  const cnt = new Array(26).fill(0) //
  for (let c of magazine) {
    //a
    cnt[c.charCodeAt() - 'a'.charCodeAt()]++ //cnt[0]++
  }
  for (let c of ransomNote) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]-- //通过26个字母去
    if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false
    }
  }
  return true
}
// @lc code=end
