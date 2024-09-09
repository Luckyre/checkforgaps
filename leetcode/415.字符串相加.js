/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (54.57%)
 * Likes:    850
 * Dislikes: 0
 * Total Accepted:    343.5K
 * Total Submissions: 629.5K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 *
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 *
 *
 * 示例 2：
 *
 *
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 *
 *
 * 示例 3：
 *
 *
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  //GPT 小抄手

  // '3556' '355'
  let i = num1.length - 1, // 3   从 num1 的末尾开始遍历
    j = num2.length - 1, //2
    add = 0 // add 用于存储进位值，初始化为 0。
  const ans = []
  while (i >= 0 || j >= 0 || add != 0) {
    // 当 i 或 j 或 add 不为 0 时，循环继续。
    // 当 i 或 j 小于 0 时，将其对应的值设为 0。

    const x = i >= 0 ? num1.charAt(i) - '0' : 0 // i=3: x=6
    const y = j >= 0 ? num2.charAt(j) - '0' : 0 // j=2; y=5
    const result = x + y + add // 11
    ans.push(result % 10) //1
    add = Math.floor(result / 10) //1
    i -= 1
    j -= 1
  }
  return ans.reverse().join('') // 从后向前遍历数组，将每个元素添加到字符串中。
}
// @lc code=end
