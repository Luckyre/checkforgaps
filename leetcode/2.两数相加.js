/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 在两条链表上的指针
  let p1 = l1,
    p2 = l2
  //创建虚拟头结点
  let dummy = new ListNode(-1)
  // 指针p 负责构建新链表
  let p = dummy
  let carry = 0 //记录进位
  while (p1 !== null || p2 !== null || carry > 0) {
    // 开始执行加法，两条链表走完且没有进位时才结束循环
    let val = carry //先加上上上次的进位
    if (p1 !== null) {
      val += p1.val
      p1 = p1.next
    }
    if (p2 !== null) {
      val += p2.val
      p2 = p2.next
    }
    carry = Math.floor(val / 10) //
    val = val % 10
    // 构建新节点
    p.next = new ListNode(val)
    p = p.next
  }
  //返回结果链表的头节点（去除虚拟头结点）
  return dummy.next
}
// @lc code=end
