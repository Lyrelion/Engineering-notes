let a = 10
let c = 20
let d = 30

function show() {
    console.log('第一次尝试 ES6模块化规范')
}

// 默认导出 export default （仅有一次机会）
export default {
    a,
    c,
    show
}
// 只允许进行一次默认导出，上面已经导出过 a，c，show了
// export default { // 报错
//   d
// }

// 按需导出（可以多次使用）
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
    console.log('这些都是按需导出的成员')
}