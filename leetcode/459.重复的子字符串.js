/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 *
 * https://leetcode.cn/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (51.77%)
 * Likes:    1210
 * Dislikes: 0
 * Total Accepted:    282.1K
 * Total Submissions: 544.4K
 * Testcase Example:  '"abab"'
 *
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abab"
 * 输出: true
 * 解释: 可由子串 "ab" 重复两次构成。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "aba"
 * 输出: false
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "abcabcabcabc"
 * 输出: true
 * 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 *
 *
 *
 *
 * 提示：
 *
 *
 *
 *
 * 1 <= s.length <= 10^4
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var repeatedSubstringPattern = function (s) {
  //abcabcabc
  //丢人 没想到
  //方法一 枚举法
  // 枚举的长度为[1,len/2]
  const sLength = s.length //9
  for (let i = 1; i * 2 <= sLength; i++) {
    //i=1 1*2<=9
    //i=2 2*2<=9

    if (sLength % i === 0) {
      //9%1 9%2
      let match = true
      for (let j = i; j < sLength; j++) {
        //j=1 1<9
        //j=2 2<9

        if (s[j] !== s[j - i]) {
          //s[1]!== s[1-1] b!==a
          match = false
          break
        }
      }
      if (match) {
        return true
      }
    }
  }
  return false
}

// @lc code=end
