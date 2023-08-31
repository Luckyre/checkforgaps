/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 通过创建快慢指针，然后快指针走两步，慢指针走一步，
  //1、若两者相遇，则是环遇
  let getNext = function (n) {
    return n
      .toString()
      .split('')
      .map((i) => i ** 2)
      .reduce((a, b) => a + b)
  }
  let slow = n
  let fast = getNext(n)
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }
  return fast === 1
}
// @lc code=end
