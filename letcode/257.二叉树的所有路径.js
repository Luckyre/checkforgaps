/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode.cn/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (70.90%)
 * Likes:    1157
 * Dislikes: 0
 * Total Accepted:    416.3K
 * Total Submissions: 586.7K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,null,5]
 * 输出：["1->2->5","1->3"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1]
 * 输出：["1"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [1, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 */

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // 输入：root = [1,2,3,null,5]
  //  输出：["1->2->5","1->3"]
  //深度优先搜索
  const paths = []
  const construct_paths = (root, path) => {
    //
    if (root) {
      path += root.val.toString() // 1 //1->2  //1->2->5   1->3

      if (!root.left && !root.right) {
        //一直遍历到叶子节点
        //

        paths.push(path)
      } else {
        path += '->' //1-> //1->2->5  //1->3

        construct_paths(root.left, path)
        construct_paths(root.right, path)
      }
    }
  }

  construct_paths(root, '')
  return paths
}
// @lc code=end
