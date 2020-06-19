// 配置 postCSS 自动添加 css 的兼容前缀
// postcss.config.js 配置文件
const autoprefixer = require('autoprefixer') // 导入自动添加前缀的插件

module.exports = {
    plugins: [autoprefixer] // 挂载插件
}