// console.log('ok') // 查看 babel配置文件是否配置成功

// 默认导入 import xx from xx
// import m1 from './m1.js'
// console.log(m1)
// { a: 10, c: 20, show: [Function: show] } 因为d并没有在 m1模块中进行导出
// 如果模块么有导出对象，而我们却导入对象，最后会打印 空对象

// 默认导入 和 按需导入结合
// 按需导入 通过{}实现
// 按需导入可将原来的变量进行重命名 —— 原来变量 as 新名字
// import m1, { s1, s2 as ss2, say } from './m1.js'
// console.log(m1)
// console.log(s1)
// console.log(ss2)
// console.log(say)
// 执行结果：{ a: 10, c: 20, show: [Function: show] }
// aaa
// ccc
// [Function: say]

// 只想单纯执行某个模块中的代码，并不需要得到模块中向外暴露的成员，可以直接导入
import './m2.js'
// 执行结果：0,1,2