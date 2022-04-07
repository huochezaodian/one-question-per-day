/**
 *  最多能完成排序的块
 * https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/
 */

 function maxChunksToSorted(arr: number[]): number {
  // 初始块的最大值
  let max = arr[0]
  // 采用辅助栈存储每个块的最大值,这里用数组代替足够了
  const maxArr = [max]
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i]
    // maxArr 里面的值从右往左和 num 比较
    // 如果大于，则代表 num 和 max 必须在同一个块里，然后继续和前面的块的最大值比较
    if (max > num) {
      // 从倒数第二个开始再次比较
      let index = maxArr.length - 2
      while(maxArr[index] > num){
        maxArr.splice(index, 1)
        index--
      }
      
    } else {
      maxArr.push(num)
      max = num
    }
  }
  return maxArr.length
};