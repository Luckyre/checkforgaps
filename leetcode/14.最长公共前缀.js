/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (43.30%)
 * Likes:    2788
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let m = strs.length // 3
  let n = strs[0].length // 2

  for (let col = 0; col < n; col++) {
    // col=1
    //0
    for (let row = 1; row < m; row++) {
      //row= 2
      // 1
      let thisStr = strs[row], // 'ab'
        prevStr = strs[row - 1] // 'aa'
      //判断每个字符串的col 索引是否相同
      if (
        col >= thisStr.length ||
        col >= prevStr.length ||
        thisStr.charAt(col) != prevStr.charAt(col)
      ) {
        // 发现不匹配的字符，只有 strs[row][0..col-1] 是公共前缀
        return strs[row].substring(0, col) // 'ab'.substring(0,1) = 'a'
      }
    }
  }
  return strs[0]
}

let result = longestCommonPrefix(['aa', 'ab', 'a'])
// @lc code=end
