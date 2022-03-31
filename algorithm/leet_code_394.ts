/**
 * 字符串编码
 * https://leetcode-cn.com/problems/decode-string/
 */

 function decodeString(s: string): string {
  const length = s.length
  // 数字和字符元组栈, 数字是字符将要翻倍的数量
  const stack: [string, string][] = []
  let stackIndex: number = -1
  let result = ''
  let str = ''
  let number = ''
  for(let i = 0; i < length; i++) {
    // 数字临时存储
    if (s[i] >= '0' && s[i] <= '9') {
      number += s[i]
      continue
    }
    // 不执行操作
    if (s[i] === '[') {
      stackIndex++
      // 上次的数字和数字之前的字符都入栈
      stack[stackIndex] = [number, result]
      result = ''
      number = ''
      continue
    }
    // 出栈, 计算字符串
    if (s[i] === ']') {
      const count = Number(stack[stackIndex][0])
      str = getStr(result, count)
      result = stack[stackIndex][1] + str
      stackIndex--
      continue
    }
    result += s[i]
  }
  return result
};

// 字符根据数量翻倍
function getStr (str: string, count: number): string {
  let result = ''
  for (let i = 0; i < count; i++) {
    result += str
  }
  return result
}