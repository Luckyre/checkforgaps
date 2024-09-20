/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode.cn/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (74.00%)
 * Likes:    265
 * Dislikes: 0
 * Total Accepted:    80.8K
 * Total Submissions: 109.2K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 *
 * 美式键盘 中：
 *
 *
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：words = ["Hello","Alaska","Dad","Peace"]
 * 输出：["Alaska","Dad"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：words = ["omk"]
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：words = ["adsdf","sfd"]
 * 输出：["adsdf","sfd"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * words[i] 由英文字母（小写和大写字母）组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  // 通过把每一行的字母都放在一个set中，然后通过判断words[i]中的字母是否存在set中
  const set1 = new Set('qwertyuiop')
  const set2 = new Set('asdfghjkl')
  const set3 = new Set('zxcvbnm')
  const res = []
  // 把words中的单词转小写

  let lowerCaseWords = words.map((item) => item.toLowerCase())
  for (let i = 0; i < lowerCaseWords.length; i++) {
    // 判断words[i] 是否在set1,set2,set3中存在
    if (lowerCaseWords[i].split('').every((item) => set1.has(item))) {
      res.push(words[i])
    } else if (lowerCaseWords[i].split('').every((item) => set2.has(item))) {
      res.push(words[i])
    } else if (lowerCaseWords[i].split('').every((item) => set3.has(item))) {
      res.push(words[i])
    }
  }
  return res
}

var findWords2 = function (words) {
  // * 第一行由字符 "qwertyuiop" 组成。
  // * 第二行由字符 "asdfghjkl" 组成。
  // * 第三行由字符 "zxcvbnm" 组成。
  //  ["Hello","Alaska","Dad","Peace"]
  // 方法二，遍历
  // 预处理计算出每个字符对应的行号。
  //遍历字符串时，统一将大写字母转化为小写字母方便计算
  const list = []
  const rowIdx = '12210111011122000010020202' // 预处理26个字符对应的行号
  for (const word of words) {
    // 'Hello', 'Alaska', 'Dad', 'Peace'
    let isValid = true
    const idx = rowIdx[word[0].charCodeAt() - 'a'.charCodeAt()] // 得到第一个字符对应的行号
    for (let i = 1; i < word.length; ++i) {
      if (rowIdx[word[i].charCodeAt() - 'a'.charCodeAt()] !== idx) {
        //遍历word中的其他字符，是否都与第一个字符在同一行
        // 如果不在同一行，那么就不是一个单词
        isValid = false
        break
      }
    }
    if (isValid) {
      list.push(word)
    }
  }
  return list
}
// @lc code=end
