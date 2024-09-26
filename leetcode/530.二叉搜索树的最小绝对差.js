/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode.cn/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (62.82%)
 * Likes:    584
 * Dislikes: 0
 * Total Accepted:    277.3K
 * Total Submissions: 441.2K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 *
 * 差值是一个正数，其数值等于两值之差的绝对值。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [4,2,6,1,3]
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,0,48,null,null,12,49]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目范围是 [2, 10^4]
 * 0 <= Node.val <= 10^5
 *
 *
 *
 *
 * 注意：本题与 783
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同
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
 * @return {number}
 */

var getMinimumDifference = function (root) {
  // 通过遍历二叉树节点，然后通过Math.abs()节点值比较最小min值

  // 深度优先函数
  //   const dfs =(root)=>{
  //     if (root === null) return
  //     dfs(root.left)
  //     dfs(root.right)
  //   }
  let min = Infinity
  let pre = null
  const dfs = (root) => {
    // root =4,root=2, dfs=1
    if (root === null) return
    dfs(root.left) // dfs(2)
    if (pre !== null) {
      min = Math.min(min, root.val - pre.val)
      // root = 2, pre= 4 //min=4-2 =2,
    }
    pre = root //pre =
    dfs(root.right)
  }
  dfs(root) // [4,2,6,1,3]
  return min
}

// @lc code=end
