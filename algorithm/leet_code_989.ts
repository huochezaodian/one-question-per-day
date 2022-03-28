/**
 * 989. 数组形式的整数加法
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 */

export function addToArrayForm(num: number[], k: number): number[] {
  const result: number[] = []
  const len = num.length - 1
  for (let i = len; i >= 0 || k > 0; i--, k = Math.floor(k / 10)) {
    if (i >= 0) {
      k += num[i]
    }
    result.push(k % 10)
  }
  return result.reverse()
};

console.log(addToArrayForm([1, 2, 0, 0], 34))
