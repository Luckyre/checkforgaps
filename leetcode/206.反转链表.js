/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (74.68%)
 * Likes:    3641
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：[2,1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围是 [0, 5000]
 * -5000
 *
 *
 *
 *
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 *
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代方式
// 5->4>3>2>1>null
// var reverseList = function (head) { //[1,2,3,4,5]
//   let prev = null
//   let curr = head
//   while (curr) {
//     const next = curr.next //
//     curr.next = prev
//     prev = curr
//     curr = next
//   }
//   return prev
// }

// 递归方式

var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  var last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}
// @lc code=end
