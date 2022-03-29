/**
 * 821. 字符的最短距离
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 */

export function shortestToChar(s: string, c: string): number[] {
  const length = s.length
  const result: number[] = []
  // 记录s的位置
  // 从左往右找输出 ...012340123450...
  let curIndex = -length
  for(let i = 0; i < length ; i++) {
      // 判断是是否是c，是的话，当前值为0
      if (s[i] === c) {
          curIndex = i
          result[i] = 0
          continue
      }
      result[i] = i - curIndex
  }
  // 从右往左，把0左侧的变成和右侧的一样
  for(let i = curIndex - 1; i >= 0 ; i--) {
      if (result[i] === 0) {
          curIndex = i
          continue
      }
      // 从0左侧开始+1，然后和当前值比较
      const curResult = curIndex - i
      if (curResult <= result[i]) {
          result[i] = curResult
      }
  }
  return result
}
