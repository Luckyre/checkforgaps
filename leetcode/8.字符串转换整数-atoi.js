/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 *
 * https://leetcode.cn/problems/string-to-integer-atoi/description/
 *
 * algorithms
 * Medium (21.32%)
 * Likes:    1853
 * Dislikes: 0
 * Total Accepted:    668.2K
 * Total Submissions: 3.1M
 * Testcase Example:  '"42"'
 *
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数。
 *
 * 函数 myAtoi(string s) 的算法如下：
 *
 *
 * 空格：读入字符串并丢弃无用的前导空格（" "）
 * 符号：检查下一个字符（假设还未到字符末尾）为 '-' 还是 '+'。如果两者都不存在，则假定结果为正。
 * 转换：通过跳过前置零来读取该整数，直到遇到非数字字符或到达字符串的结尾。如果没有读取数字，则结果为0。
 * 舍入：如果整数数超过 32 位有符号整数范围 [−2^31,  2^31 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −2^31
 * 的整数应该被舍入为 −2^31 ，大于 2^31 − 1 的整数应该被舍入为 2^31 − 1 。
 *
 *
 * 返回整数作为最终结果。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "42"
 *
 * 输出：42
 *
 * 解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
 *
 *
 * 带下划线线的字符是所读的内容，插入符号是当前读入位置。
 * 第 1 步："42"（当前没有读入字符，因为没有前导空格）
 * ⁠        ^
 * 第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
 * ⁠        ^
 * 第 3 步："42"（读入 "42"）
 * ⁠          ^
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = " -042"
 *
 * 输出：-42
 *
 * 解释：
 *
 *
 * 第 1 步："   -042"（读入前导空格，但忽视掉）
 * ⁠           ^
 * 第 2 步："   -042"（读入 '-' 字符，所以结果应该是负数）
 * ⁠            ^
 * 第 3 步："   -042"（读入 "042"，在结果中忽略前导零）
 * ⁠              ^
 *
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "1337c0d3"
 *
 * 输出：1337
 *
 * 解释：
 *
 *
 * 第 1 步："1337c0d3"（当前没有读入字符，因为没有前导空格）
 * ⁠        ^
 * 第 2 步："1337c0d3"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
 * ⁠        ^
 * 第 3 步："1337c0d3"（读入 "1337"；由于下一个字符不是一个数字，所以读入停止）
 * ⁠            ^
 *
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "0-1"
 *
 * 输出：0
 *
 * 解释：
 *
 *
 * 第 1 步："0-1" (当前没有读入字符，因为没有前导空格)
 * ⁠        ^
 * 第 2 步："0-1" (当前没有读入字符，因为这里不存在 '-' 或者 '+')
 * ⁠        ^
 * 第 3 步："0-1" (读入 "0"；由于下一个字符不是一个数字，所以读入停止)
 * ⁠         ^
 *
 *
 *
 * 示例 5：
 *
 *
 * 输入：s = "words and 987"
 *
 * 输出：0
 *
 * 解释：
 *
 * 读取在第一个非数字字符“w”处停止。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 200
 * s 由英文字母（大写和小写）、数字（0-9）、' '、'+'、'-' 和 '.' 组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // "-41"
  //方法一 parseInt 解法
  const number = parseInt(s, 10) // parseInt('-41', 10) = -41

  //parseInt 会忽略前导空格
  //parseInt 会忽略前导零
  //parseInt 会忽略符号

  if (isNaN(number)) {
    return 0
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1
  } else {
    return number
  }
}

var myAtoi2 = function (str) {
  // 还得多理解

  //'-41CXAEDA'
  // 方法二 自动机
  // 自动机的定义 有限状态机
  // 执行阶段，自动机处于开始状态start。
  // 最初，自动机处于开始状态start。
  // 遇到空格之后，自动机仍处于开始状态start。
  // 遇到符号之后，自动机进入符号状态sign，后续根据符号决定状态。
  // 遇到数字字符之后，自动机进入数值状态number，后续根据数值的大小决定返回值。
  // 遇到其他字符之后，自动机进入结束状态end。

  class Automaton {
    constructor() {
      this.state = 'start'
      this.sign = 1
      this.answer = 0
      this.map = new Map([
        ['start', ['start', 'sign', 'number', 'end']],
        ['sign', ['end', 'end', 'number', 'end']],
        ['number', ['end', 'end', 'number', 'end']],
        ['end', ['end', 'end', 'end', 'end']],
      ])
    }

    getIndex(char) {
      //获取状态索引
      if (char === '') {
        return 0
      } else if (char === '+' || char === '-') {
        return 1
      } else if (typeof Number(char) === 'number' && !isNaN(char)) {
        return 2
      } else {
        return 3
      }
    }
    get(char) {
      // char ='-'
      //char = '4'
      //char = '1'
      //char = 'C'
      this.state = this.map.get(this.state)[this.getIndex(char)]
      // this.map.get('start')[1] = 'sign'
      // this.map.get('sign')[2] = 'number'
      // this.map.get('number')[2] = 'number'
      // this.map.get('number')[3] = 'end'
      if (this.state === 'number') {
        this.answer = this.answer * 10 + (char - 0) //0*10+(4-0) = 4  //4*10+(1-0) = 41  char - 0 是将字符转换为数字
        this.answer =
          this.sign === 1
            ? Math.min(this.answer, Math.pow(2, 31) - 1)
            : Math.min(this.answer, -Math.pow(-2, 31))
      } else if (this.state === 'sign') {
        this.sign = char === '+' ? 1 : -1 //-1
      }
    }
  }

  const automaton = new Automaton()
  for (let char of str) {
    //优化 遇到 this.state === 'end' 就跳出循环  因为后面的字符都不是数字了
    if (automaton.state === 'end') {
      break
    }
    automaton.get(char)
    //str = '-41CXAEDA'
  }
  return automaton.sign * automaton.answer
}
// @lc code=end
