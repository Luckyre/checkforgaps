/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode.cn/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (57.59%)
 * Likes:    618
 * Dislikes: 0
 * Total Accepted:    311.7K
 * Total Submissions: 541.3K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 *
 *
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abcdefg", k = 2
 * 输出："bacdfeg"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "abcd", k = 2
 * 输出："bacd"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅由小写英文组成
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // s = abcdefgdabc  s.length=11
  // k = 2
  // 将s字符通过 2k个字符分为一组，然后反转前k个字符
  // 剩余的最后一组，小于k个字符，全部反转，
  //如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样

  //将s字符通过 2k个字符分为一组
  let arr = []
  for (let i = 0; i < s.length; i += 2 * k) {
    //将s字符通过 2k个字符分为一组，然后反转前k个字符
    if (i + 2 * k <= s.length) {
      //i =0 i+2k=4 <= 11 arr= [bacd]
      // i=4, i+2k=8<= 11 arr= ["bacd","fegd"]
      //遍历大于2k个字符的情况
      arr.push(
        s
          .slice(i, i + k)
          .split('')
          .reverse()
          .join('') + s.slice(i + k, i + 2 * k)
      )
    } else {
      //遍历小于2k个字符的情况，相当于最后一组
      //如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样.如果小于k个字符，全部反转

      // i=8, i+2k=12 i+2k=12<= 11 arr = ["bacd","fegd"]
      if (s.length - i >= k) {
        // (8,11)
        //
        arr.push(
          s
            .slice(i, i + k)
            .split('')
            .reverse()
            .join('') + s.slice(i + k, s.length)
        )
        //["bacd","fegd",'cba]
      } else {
        arr.push(s.slice(i, s.length).split('').reverse().join(''))
      }
    }
  }
  return arr.join('') //"bacdfegdcba"
}

var reverseStr2 = function (s, k) {
  //方法二 模拟
  // abcdefgdabc  s.length=11
  // k = 2

  const n = s.length
  const arr = Array.from(s) //["a","b","c","d","e","f","g","d","a","b","c"]
  //遍历大于2k个字符的情况
  for (let i = 0; i < n; i += 2 * k) {
    reverse(arr, i, Math.min(i + k, n) - 1)
    // i=0 reverse(arr,0,1)
    // i=4, reverse(arr,4,5)
    // i=8, reverse(arr,8,10)
    // i=8, arr= ["bacd","fegd"]
  }
  function reverse(arr, left, right) {
    while (left < right) {
      //0<1
      let tmp = arr[left] //temp = arr[0] = a
      arr[left] = arr[right] //arr[0] =arr[1] = b
      arr[right] = tmp //arr[b] =a
      left++ //0+1 = 1
      right-- //1-1 =0
    }
  }
  return arr.join('')
}
// @lc code=end
