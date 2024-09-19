/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 *
 * https://leetcode.cn/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (67.67%)
 * Likes:    1330
 * Dislikes: 0
 * Total Accepted:    506.8K
 * Total Submissions: 747.7K
 * Testcase Example:  '3749'
 *
 * 七个不同的符号代表罗马数字，其值如下：
 *
 *
 *
 *
 * 符号
 * 值
 *
 *
 *
 *
 * I
 * 1
 *
 *
 * V
 * 5
 *
 *
 * X
 * 10
 *
 *
 * L
 * 50
 *
 *
 * C
 * 100
 *
 *
 * D
 * 500
 *
 *
 * M
 * 1000
 *
 *
 *
 *
 * 罗马数字是通过添加从最高到最低的小数位值的转换而形成的。将小数位值转换为罗马数字有以下规则：
 *
 *
 * 如果该值不是以 4 或 9 开头，请选择可以从输入中减去的最大值的符号，将该符号附加到结果，减去其值，然后将其余部分转换为罗马数字。
 * 如果该值以 4 或 9 开头，使用 减法形式，表示从以下符号中减去一个符号，例如 4 是 5 (V) 减 1 (I): IV ，9 是 10 (X) 减
 * 1 (I)：IX。仅使用以下减法形式：4 (IV)，9 (IX)，40 (XL)，90 (XC)，400 (CD) 和 900 (CM)。
 * 只有 10 的次方（I, X, C, M）最多可以连续附加 3 次以代表 10 的倍数。你不能多次附加 5 (V)，50 (L) 或 500
 * (D)。如果需要将符号附加4次，请使用 减法形式。
 *
 *
 * 给定一个整数，将其转换为罗马数字。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num = 3749
 *
 * 输出： "MMMDCCXLIX"
 *
 * 解释：
 *
 *
 * 3000 = MMM 由于 1000 (M) + 1000 (M) + 1000 (M)
 * ⁠700 = DCC 由于 500 (D) + 100 (C) + 100 (C)
 * ⁠ 40 = XL 由于 50 (L) 减 10 (X)
 * ⁠  9 = IX 由于 10 (X) 减 1 (I)
 * 注意：49 不是 50 (L) 减 1 (I) 因为转换是基于小数位
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：num = 58
 *
 * 输出："LVIII"
 *
 * 解释：
 *
 *
 * 50 = L
 * ⁠8 = VIII
 *
 *
 *
 * 示例 3：
 *
 *
 * 输入：num = 1994
 *
 * 输出："MCMXCIV"
 *
 * 解释：
 *
 *
 * 1000 = M
 * ⁠900 = CM
 * ⁠ 90 = XC
 * ⁠  4 = IV
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num <= 3999
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  //1898
  // 方法一  不断地取最大得罗马数字
  const RomanList = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]
  num = num.toString()
  let res = []
  for (const [value, letter] of RomanList) {
    while (num >= value) {
      //1898>1000 898>500
      num -= value // num = 1890-1000 num=898-500=398  398-100=298 298-100=198 198-100=98 98-90=8 8-5=3
      res.push(letter) //[M] [MD] [MDCCC] [MDCCCXC] [MDCCCXCV] [MDCCCXCVIII]
    }
    if (num == 0) {
      break
    }
  }
  return res.join('')
}
var intToRoman2 = function (num) {
  // 方法二  那所有罗马数字结合  罗列法
  const thousands = ['', 'M', 'MM', 'MMM'] //1000,2000,3000 千位数中的所有制
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'] //100,200,300,400,500,600,700,800,900 百位数中的所有制
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'] //10,20,30,40,50,60,70,80,90 十位数中的所有制
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'] //1,2,3,4,5,6,7,8,9 个位数中的所有制
  const thousandsIndex = Math.floor(num / 1000) // 1898/1000=1 取整
  const hundredsIndex = Math.floor((num % 1000) / 100) // 1898%1000=898 898/100=8 取整
  const tensIndex = Math.floor((num % 100) / 10) // 1898%100=89 89/10=8 取整
  const onesIndex = Math.floor(num % 10) // 1898%10=8 取整

  const res =
    thousands[thousandsIndex] +
    hundreds[hundredsIndex] +
    tens[tensIndex] +
    ones[onesIndex]
  return res
}
// @lc code=end
