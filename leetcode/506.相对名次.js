/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 *
 * https://leetcode.cn/problems/relative-ranks/description/
 *
 * algorithms
 * Easy (65.80%)
 * Likes:    247
 * Dislikes: 0
 * Total Accepted:    92.8K
 * Total Submissions: 140.9K
 * Testcase Example:  '[5,4,3,2,1]'
 *
 * 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。
 *
 * 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2
 * 高，依此类推。运动员的名次决定了他们的获奖情况：
 *
 *
 * 名次第 1 的运动员获金牌 "Gold Medal" 。
 * 名次第 2 的运动员获银牌 "Silver Medal" 。
 * 名次第 3 的运动员获铜牌 "Bronze Medal" 。
 * 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。
 *
 *
 * 使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：score = [5,4,3,2,1]
 * 输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]
 * 解释：名次为 [1^st, 2^nd, 3^rd, 4^th, 5^th] 。
 *
 * 示例 2：
 *
 *
 * 输入：score = [10,3,8,9,4]
 * 输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
 * 解释：名次为 [1^st, 5^th, 3^rd, 2^nd, 4^th] 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == score.length
 * 1 <= n <= 10^4
 * 0 <= score[i] <= 10^6
 * score 中的所有值 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  //[10,3,8,9,4]
  const desc = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  //1.通过排序，得到每个分数的排序
  //2.通过map存储每个分数的排名
  //3.遍历原数组，得到每个分数的排名

  const sortedScore = [...score].sort((a, b) => b - a) // [10,9,8,4,3]

  const map = new Map()
  for (let i = 0; i < sortedScore.length; i++) {
    const element = sortedScore[i]
    map.set(element, i + 1)
  }
  //map = {10:1,9:2,8:3,4:4,3:5}
  const res = []
  for (let i = 0; i < score.length; i++) {
    const rank = map.get(score[i])
    if (rank <= 3) {
      res.push(desc[rank - 1]) //["Gold Medal","Silver Medal","Bronze Medal"]
    } else {
      res.push(rank.toString())
    }
  }
  return res
}
// @lc code=end
