/**
 * 计算时钟的时针和分针的角度
 * https://bigfrontend.dev/zh/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock
 */

/**
 * @param {string} time
 * @returns {number} 
 */
 const oneHourAngle = 360 / 12
 const oneMinuteAngle = 360 / 60
 function angle(time) {
   // 拆分小时和分钟
   const [hours, minutes] = time.split(':')
   // 小时进制调成12分
   const curHours = hours % 12
   // 计算分钟的角度
   const mAngle = oneMinuteAngle * minutes
   // 计算小时的角度，小时的角度=小时的角度+小时在分针的基础上走的角度
   const hAngle = oneHourAngle * curHours + oneHourAngle / 60 * minutes
   const result = Math.abs(mAngle - hAngle)
   // 大于180，用360减去，计算小角, 四舍五入
   return Math.round(result > 180 ? 360 - result : result)
 }