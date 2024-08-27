/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode.cn/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (54.95%)
 * Likes:    355
 * Dislikes: 0
 * Total Accepted:    207.2K
 * Total Submissions: 376.7K
 * Testcase Example:  '"hello"'
 *
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 *
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "hello"
 * 输出："holle"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "leetcode"
 * 输出："leotcede"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s 由 可打印的 ASCII 字符组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // hello
  // 双指针
  let left = 0,
    right = s.length - 1 //4
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const sArr = s.split('') //[h,e,l,l,o]
  while (left < right) {
    // 如果左边指针没遍历到元音时，向右移动
    while (left < right && !vowels.includes(sArr[left])) {
      left++ //1
    }
    while (left < right && !vowels.includes(sArr[right])) {
      right--
    }
    // 交换左右元音字符
    if (left < right) {
      //1<4
      let temp = sArr[left]
      sArr[left] = sArr[right]
      sArr[right] = temp
      left++ //2
      right-- //3
    }
  }
  return sArr.join('')
}
// @lc code=end
