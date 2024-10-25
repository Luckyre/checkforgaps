/*
 * @lc app=leetcode.cn id=557 lang=javascript
 * @lcpr version=20002
 *
 * [557] 反转字符串中的单词 III
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // "Mr Ding"
  //然后从头到尾遍历原字符串，直到找到空格为止，此时找到了一个单词，并能得到单词的起止位置。随后，根据单词的起止位置，可以将该单词逆序放到新字符串当中。如此循环多次，直到遍历完原字符串，就能得到翻转后的结果。

  const ret = []
  const length = s.length
  let i = 0
  while (i < length) {
    // 遍历字符串
    let start = i //0
    while (i < length && s.charAt(i) != ' ') {
      // s.charAt(i) 捕获空值
      i++ //i=1
    }
    for (let p = start; p < i; p++) {
      //start=0  p=0 i=1
      ret.push(s[start + i - 1 - p]) // 从后往前遍历
    }
    while (i < length && s.charAt(i) == ' ') {
      i++
      ret.push(' ')
    }
  }
  return ret.join('')
}

// @lc code=end

/*
// @lcpr case=start
// "Let's take LeetCode contest"\n
// @lcpr case=end

// @lcpr case=start
// "Mr Ding"\n
// @lcpr case=end

 */
