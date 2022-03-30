import { addToArrayForm } from '../algorithm/leet_code_989'
import { shortestToChar } from '../algorithm/leet_code_821'
import { CustomStack } from '../algorithm/leet_code_1381'
 
// console.log(addToArrayForm([1, 2, 0, 0], 34))
// console.log(shortestToChar('bbab', 'a'))
const myStack = new CustomStack(3)
console.log(myStack.pop())
myStack.push(1)
console.log(myStack.stack)
myStack.push(2)
console.log(myStack.stack)
console.log(myStack.pop())
myStack.push(3)
console.log(myStack.stack)
myStack.push(4)
console.log(myStack.stack)
myStack.push(5)
console.log(myStack.stack)
myStack.increment(5, 100)
console.log(myStack.stack)