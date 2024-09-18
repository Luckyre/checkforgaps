/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 *
 * https://leetcode.cn/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (70.48%)
 * Likes:    770
 * Dislikes: 0
 * Total Accepted:    168.4K
 * Total Submissions: 238.8K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
 *
 * 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 *
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100
 * 。计算这个岛屿的周长。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * 输出：16
 * 解释：它的周长是上面图片中的 16 个黄色的边
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[1]]
 * 输出：4
 *
 *
 * 示例 3：
 *
 *
 * 输入：grid = [[1,0]]
 * 输出：4
 *
 *
 *
 *
 * 提示：
 *
 *
 * row == grid.length
 * col == grid[i].length
 * 1
 * grid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 方法一  遍历
  // 遍历每一个格子，看其四个方向是否为水域，如果是水域，周长加一
  // 时间复杂度：O(nm)，其中 n 为网格的高度，m 为网格的宽度。每个格子至多会被遍历一次，因此总时间复杂度为 O(nm)。
  // 空间复杂度：O(1)。只需要常数空间存放若干变量。
  //😭😭笨脑子

  // 通过
  let land = 0 //土地的个数
  let border = 0 // 接壤边界条数
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        land++ //
      } // 土地的个数
      if (grid[i][j] === 1 && i < grid.length - 1 && grid[i + 1][j] === 1) {
        border++
      } // 向下
      if (grid[i][j] === 1 && j < grid[0].length - 1 && grid[i][j + 1] === 1) {
        border++
      } // 向右
      // 因为有重复计算，所以需要减去重复的，所以需要减去2
    }
  }
  return 4 * land - 2 * border
}

// @lc code=end
