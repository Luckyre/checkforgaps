/*
 * @lc app=leetcode.cn id=551 lang=javascript
 * @lcpr version=20002
 *
 * [551] 学生出勤记录 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  // 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
  // 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
  let A = 0
  let L = 0
  for (let i = 0; i < s.length; i++) {
    // "PPALLP"
    if (s[i] === 'A') {
      //s[2]
      A++ // A=1
      L = 0
      if (A >= 2) {
        return false
      }
    } else if (s[i] === 'L') {
      L++ //S[3] l=1  S[4] l=2
      if (L >= 3) {
        return false
      }
    } else {
      L = 0
    }
  }
  return true
}

// @lc code=end

/*
// @lcpr case=start
// "PPALLP"\n
// @lcpr case=end

// @lcpr case=start
// "PPALLL"\n
// @lcpr case=end

 */
var checkRecord2 = function (s) {
  // 正则
  return !/A.*A|LLL/.test(s)
}
