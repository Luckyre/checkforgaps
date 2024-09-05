/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode.cn/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (64.38%)
 * Likes:    477
 * Dislikes: 0
 * Total Accepted:    214.1K
 * Total Submissions: 332.5K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t ，它们只包含小写字母。
 *
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 *
 * 请找出在 t 中被添加的字母。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "", t = "y"
 * 输出："y"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s 和 t 只包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 方法一,通过遍历s,将每个字符的计数值加1，然后遍历t,每个字符的计数值减1
  //最后如果某个字符得计数值为-1，则说明该字符是插入字符
  const cnt = new Array(26).fill(0)
  for (const ch of s) {
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]++ //[1,1,1,1]
  }
  for (const ch of t) {
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]-- //[0,0,0,0,-1]
    if (cnt[ch.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return ch
    }
  }
  return ''
}

var findTheDifference = function (s, t) {
  //求和  通过计算s与t的charCodeAt()值求和,然后比较两者得差值，
  //在转化通过fromCharCodeAt()转化为字符
  // 16

  let s1 = 0,
    s2 = 0
  for (const ch of s) {
    s1 += ch.charCodeAt()
  }
  for (const ch of t) {
    s2 += ch.charCodeAt()
  }
  return String.fromCharCode(s2 - s1)
}
// @lc code=end
