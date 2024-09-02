/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
  // ()
  //建立一个栈
  let left = []
  // 遍历字符串中的每一字符
  for (let c of str) {
    //[()()]
    // 如果是做括号，则入栈
    if (['(', '{', '['].includes(c)) {
      left.push(c) //[(]
    } else {
      //否则c就是右括号
      if (left.length && leftOf(c) === left[left.length - 1]) {
        left.pop()
      } else {
        //和最近的左括号不匹配
        return false
      }
    }
  }
  // 是否所有左括号都被匹配
  return left.length === 0
}

function leftOf(c) {
  if (c === '}') return '{'
  if (c === ')') return '('
  return '['
}
// @lc code=end
