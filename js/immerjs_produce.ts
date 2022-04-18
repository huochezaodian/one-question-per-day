/**
 * 实现 produce()
 * https://bigfrontend.dev/zh/problem/immerjs
 * 
 * 暂无优解，目前思路
 * 1. 拷贝对象，存一份
 * 2. 修改拷贝的值
 * 3. 修改的值和原来的值用key一一比较，未改动的，则把原来的key的值赋给新的对象，修改的不动
 * 4. 返回新的对象
 */