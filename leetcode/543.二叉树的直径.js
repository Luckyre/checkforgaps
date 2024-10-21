/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * @lcpr version=20002
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 1
  // 默认根节点的路径长度

  function depth(rootNode) {
    if (!rootNode) {
      // 如果不存在根节点 深度为0
      return 0
    }
    let L = depth(rootNode.left)
    let R = depth(rootNode.right)
    ans = Math.max(ans, L + R + 1)
    //  等同于：左子树深度(节点个数) + 右子树深度（节点个数） + 1个根节点
    //     便是这株二叉树从最左侧叶子节点到最右侧叶子节点的最长路径
    //     类似于平衡二叉树的最小值节点到最大值节点的最长路径
    //     之所以+1是因为需要经过根节点

    return Math.max(L, R) + 1 // 已知根节点的左右子树的深度
  }
  depth(root)
  return ans - 1 // 题目要求的是节点个数 而不是路径长度
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */
