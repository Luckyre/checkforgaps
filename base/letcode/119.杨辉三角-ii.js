/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  //3
  /*
1 
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/

  const res = new Array(rowIndex + 1) //3
  res[0] = 1
  for (let i = 1; i < rowIndex + 1; i++) {
    //1
    //rowIndex=4+1  3
    res[0] = res[i] = 1 // res[0] = res[1] =1
    for (let j = i - 1; j >= 1; j--) {
      //2
      // j= 2-1 j=3-1
      res[j] = res[j] + res[j - 1] //res[1]= 1+1=2   res[2] = res[2]+res[1]
    }
  }
  return res
}
//
// @lc code=end
