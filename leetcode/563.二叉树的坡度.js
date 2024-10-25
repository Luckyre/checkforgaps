/*
 * @lc app=leetcode.cn id=563 lang=javascript
 * @lcpr version=20002
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) { // [4,2,9,3,5,null,7]
  let sum = 0 // 定义一个变量来存储结果
  const dfs = (root) => {// [4,2,9,3,5,null,7]
    if (!root) return 0 // 空节点
    let left = dfs(root.left) // 左节点  //2 //3   
    let right = dfs(root.right) // 右节点 //9 //5
    sum += Math.abs(left - right) // 计算左右节点的差值 // 
    return left + right + root.val //
  }
  dfs(root) // [4,2,9,3,5,null,7]
  return sum
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,2,9,3,5,null,7]\n

// @lcpr case=end

// @lcpr case=start
// [21,7,14,1,1,2,2,3,3]\n
// @lcpr case=end

 */
