/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode.cn/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (56.83%)
 * Likes:    753
 * Dislikes: 0
 * Total Accepted:    437K
 * Total Submissions: 769K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "leetcode"
 * 输出: 0
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "loveleetcode"
 * 输出: 2
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "aabb"
 * 输出: -1
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length <= 10^5
 * s 只包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 哈希表 使用哈希表存储频数
  //通过遍历字符串，赋值给哈希表，key为字符，value为出现的次数
  //遍历字符串，判断哈希表中key对应的value是否为1，如果是，返回索引

  const map = new Map()
  for (let c of s) {
    map.set(c, map.get(c) + 1 || 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }
  return -1
}

var firstUniqChar2 = function (s) {
  // hello
  //方法二 使用哈希表存执索引
  const map = new Map()
  const sLength = s.length
  for (let [i, ch] of Array.from(s).entries()) {
    if (!map.has(ch)) {
      map.set(ch, i)
    } else {
      map.set(ch, -1) // 重复字符串
    }
  }
  // map = {h:0,e:1,l:-1,0:4}
  // 遍历map，找到第一个value为正的key
  for (let value of map.values()) {
    if (value > -1) {
      return value
    }
  }
  return -1
}
// @lc code=end
