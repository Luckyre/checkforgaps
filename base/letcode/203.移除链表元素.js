/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //1、通过链表查询节点，判断curhead当前节点的下一个节点等于val,且下一个节点的节点不为空， 则删除该节点curhead.next = curhead.next.next
  //2、若curhead的下一个节点不等于val,则保留跳过
  //3、curhead的下一个节点为空，则链表循环结束
  //   const dummyHead = new ListNode(0)
  //   dummyHead.next = head
  //   let curhead = dummyHead
  //   while (curhead.next !== null) {
  //     if (curhead.next.val == val) {
  //       curhead.next = curhead.next.next
  //     } else {
  //       curhead = curhead.next
  //     }
  //   }
  //   return dummyHead.next

  // 递归
  if (head === null) {
    return head
  }
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}
// @lc code=end
