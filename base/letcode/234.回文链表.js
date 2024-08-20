/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (54.89%)
 * Likes:    1936
 * Dislikes: 0
 * Total Accepted:    792.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,2,1]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 *
 *
 *
 *
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //通过 两个指针，找到中间节点
  const vals = []
  while (head !== null) {
    vals.push(head.val)
    head = head.next
  }
  for (let i = 0, j = vals.length - 1; i < j; i++, j--) {
    if (vals[i] !== vals[j]) {
      return false
    }
  }
  return true
}

//2、递归不会

//方法三  快慢指针
// 1.找到前半部分链表的尾节点
//2. 反转后半部分链表
//3,比较两部分链表
//4,恢复链表
//5,返回结果
const reverseList = (head) => {
  let prev = null
  let curr = head
  while (curr !== null) {
    let nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }
  return prev // 反转后链表的头节点
}

const endOfFirstHalf = (head) => {
  let fast = head
  let slow = head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next // 快指针走两步
    slow = slow.next
  }
  return slow
}

var isPalindrome = function (head) {
  if (head === null) return true
  // 找到前半部分链表的尾节点并且反转后半部分链表
  let firstHalfEnd = endOfFirstHalf(head) //前半部分链表的尾节点
  let secondHalfStart = reverseList(firstHalfEnd.next) //后半部分链表的头节点

  // 比较两部分链表
  let p1 = head
  let p2 = secondHalfStart
  let result = true
  while (result && p2 != null) {
    // 注意这里是p2!= null
    // 比较对应节点的值

    if (p1.val != p2.val) result = false //
    p1 = p1.next
    p2 = p2.next
  }

  firstHalfEnd.next = reverseList(secondHalfStart)
  return result
}

// @lc code=end
