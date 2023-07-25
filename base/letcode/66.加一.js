/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // [1999] [35] [99]
  const len = digits.length //4
  for (let i = len - 1; i >= 0; i--) {
    // i=3  i=2  i=1 i=0
    digits[i]++ // digit[3]+1 = 0  digit[2] +1 0  digit[1]+1 = 0  digit[0] + 1 =2
    digits[i] %= 10 // 2 0 0 0
    if (digits[i] != 0) {
      // digit[0]
      //若无进位
      return digits //2000
    }
    digits = [...Array(len + 1)].map((_) => 0) //处理末位有进位，导致最前方需要进一位 [99]
    digits[0] = 1
    return digits
  }
}
// @lc code=end
