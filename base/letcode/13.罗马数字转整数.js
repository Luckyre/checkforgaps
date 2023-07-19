/*
 * @Author: XinAn
 * @Date: 2023-05-24 20:34:23
 * @LastEditors: lucklyrs
 * @LastEditTime: 2023-07-19 11:11:04
 * @Description: file content
 * @FilePath: \checkforgaps\base\letcode\13.罗马数字转整数.js
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  // XLIXC
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  let ans = 0
  for (let i = 0; i < s.length; ) {
    //遍历循环输入罗马数字
    if (i + 1 < s.length && map[s.substring(i, i + 2)]) {
      //通过获取罗马测试数的前两位，查询key是否存在map中
      ans += map[s.substring(i, i + 2)]
      // ans 答案值累加
      i += 2
      //指针向右移动两位
    } else {
      // 罗马测试数的前两位不存在map中时，获取一位
      ans += map[s.substring(i, i + 1)]
      i++
      //指针向右移动一位
    }
  }
  return ans
}

romanToInt('XLIC')

// XL 40  IX:NULL I:1 XLI:41  XC:90  41+90 = 131
// @lc code=end
