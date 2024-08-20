/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // [3,2,0,-4]
  // 通过双指针，快慢指针在终点前相遇时，为环形
  let slow = head, //3
    fast = head //3
  // 快指针走到末尾时停止
  while (fast !== null && fast.next !== null) {
    slow = slow.next //走一步 //
    fast = fast.next.next //走两步
    if (slow === fast) {
      return true
    }
  }
  return false
}
// @lc code=end
