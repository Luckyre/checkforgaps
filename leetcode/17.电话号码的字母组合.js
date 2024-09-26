/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (60.39%)
 * Likes:    2905
 * Dislikes: 0
 * Total Accepted:    956.3K
 * Total Submissions: 1.6M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：digits = ""
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 *
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  //回溯
  if (digits.length === 0) {
    // 输入：digits = ""
    // * 输出：[]
    return []
  }
  //23
  // 1, 定义一个map，记录数字和字母的对应关系
  const map = {
    0: '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  // 2, 定义一个数组，记录结果
  const res = []
  // 3, 定义一个函数，递归遍历
  const dfs = (curStr, i) => {
    //'' ,0
    if (i === digits.length) {
      //0 === 2
      res.push(curStr)
      return
    }
    const letters = map[digits[i]] // mpa[diats[0]]=>'abc'
    // 遍历 letters
    for (const letter of letters) {
      // 'abc'
      dfs(curStr + letter, i + 1) // 递归的入口，初始字符串为''，从下标0开始翻译  des('a', 1)   des('b', 1)  des('c', 1)
    }
  }
  dfs('', 0) //递归的入口，初始字符串为''，从下标0开始翻译
  return res
  // curStr 是当前的字符串，i 是当前遍历到的数字的下标
  // 4, 如果 i 等于 digits 的长度，说明已经遍历完了，将 curStr 加入 res 中
  // 5, 如果 i 不等于 digits 的长度，说明还没有遍历完，将 curStr 加入 res 中
  // 6, 遍历 curStr 对应的字母，将 curStr 加入 res 中
  // 7, 递归遍历
  // 8, 返回 res
  // 9, 调用 dfs 函数，返回 res
}
// @lc code=end
