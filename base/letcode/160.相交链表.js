/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  //两个链表。双指针从头开始遍历，相互遍历完，直到遍历到相同节点，或者遍历完;
  let p1 = headA,
    p2 = headB
  while (p1 !== p2) {
    if (p1 == null) {
      p1 = headB // 遍历完时 换个链表遍历
    } else {
      p1 = p1.next
    }
    if (p2 === null) {
      p2 = headA //历完时 换个链表遍历
    } else {
      p2 = p2.next
    }
  }
  return p1
}
// @lc code=end
