/**
 * 989. 数组形式的整数加法
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 */

export function addToArrayForm(num: number[], k: number): number[] {
  const result: number[] = []
  const len = num.length - 1
  // 从低位到高位相加, k 每次执行完舍掉一位
  for (let i = len; i >= 0 || k > 0; i--, k = Math.floor(k / 10)) {
    // k 的长度比 num 的长度长的时候不触发
    if (i >= 0) {
      k += num[i]
    }
    result.push(k % 10)
  }
  // 上面从低位到高位相加，数组需要反转一次
  return result.reverse()
};

console.log(addToArrayForm([1, 2, 0, 0], 34))
