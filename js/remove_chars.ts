/**
 * 去除字符：给定只含有a、b 和 c的字符串，请去掉其中的b 和 ac
 * https://bigfrontend.dev/zh/problem/remove-characters
 */

function removeChars(input: string): string {
  // 先去除 b
  let result = input.replace(/b+/g, '')
  // 再去掉 ac
  while (result.includes('ac')) {
    result = result.replace(/(ac)+/g, '')
  }
  return result
}