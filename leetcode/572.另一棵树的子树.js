/*
 * @lc app=leetcode.cn id=572 lang=javascript
 * @lcpr version=20002
 *
 * [572] 另一棵树的子树
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  
  //roo = [3,4,5,1,2]  subRoot = [4,1,2]
  // 通过先序遍历，判断subRoot 是否是root 子节点
  // 先序遍历: 根左右
  // 中序遍历:  左根右
  // 后序遍历: 左右根
  if (!root) return false

  if (root.val === subRoot.val && isSameTree(root, subRoot)) return true

  //不停地比较，某一个子树，是不是和 subRoot 一样的
  // 比较root的左子树，和subRoot 是否一样
  // 比较root的右子树，和subRoot 是否一样
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

  function isSameTree(p, q) {
    // 比较p,q节点是否想通
    if (!p && !q) return true

    // 如果p,q 有一个为空，一个不为空，说明不相同
    if (!p || !q) return false

    //比较p,q  两棵树根节点的值不同，则两棵树不同
    if (p.val !== q.val) return false

    // 递归比较p,q的左右子树
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
}
// @lc code=end

/*
// @lcpr case=start
// [3,4,5,1,2]\n[4,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]\n
// @lcpr case=end

 */
