/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 *
 * https://leetcode.cn/problems/assign-cookies/description/
 *
 * algorithms
 * Easy (56.19%)
 * Likes:    877
 * Dislikes: 0
 * Total Accepted:    436.6K
 * Total Submissions: 776.9K
 * Testcase Example:  '[1,2,3]\n[1,1]'
 *
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 *
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >=
 * g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是满足尽可能多的孩子，并输出这个最大数值。
 *
 *
 * 示例 1:
 *
 *
 * 输入: g = [1,2,3], s = [1,1]
 * 输出: 1
 * 解释:
 * 你有三个孩子和两块小饼干，3 个孩子的胃口值分别是：1,2,3。
 * 虽然你有两块小饼干，由于他们的尺寸都是 1，你只能让胃口值是 1 的孩子满足。
 * 所以你应该输出 1。
 *
 *
 * 示例 2:
 *
 *
 * 输入: g = [1,2], s = [1,2,3]
 * 输出: 2
 * 解释:
 * 你有两个孩子和三块小饼干，2 个孩子的胃口值分别是 1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出 2。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= g.length <= 3 * 10^4
 * 0 <= s.length <= 3 * 10^4
 * 1 <= g[i], s[j] <= 2^31 - 1
 *
 *
 *
 *
 * 注意：本题与 2410. 运动员和训练师的最大匹配数 题相同。
 *
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 我是工地保安，爱吃小熊饼干
  // 上班只为下班，喜欢业主小丹

  // 思路通过双指针遍历 g,s
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  let i = 0
  let j = 0
  while (i < g.length && j < s.length) {
    //同时遍历i,与j数组，通过  s[j] >= g[i] 判断是否满足条件
    if (s[j] >= g[i]) {
      count++
      i++
      j++
    } else {
      j++
    }
  }
  return count
}
// @lc code=end
