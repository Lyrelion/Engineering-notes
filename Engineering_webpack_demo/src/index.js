// 导入 jquery ，此前需要 npm install jquery –S 命令，安装 jQuery
// import $ from 'jquery' ES6高级语法，浏览器不支持会报错
import $ from 'jquery'
// webpack默认只处理js文件，如果不提供loader处理其他文件，会报错
import './css/1.css'
import './css/1.less'
import './css/1.scss'

// 基于 jQuery实现表格隔行变色效果
$(function() {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', 'lightblue')
})

// 定义JS高级语法 
// 默认webpack处理不了高级语法 babel打包处理js文件中的高级语法
class Person {
    static info = 'aaa'
}

console.log(Person.info)

// -----------------------------------------------
// 导入 vue构造函数
import Vue from 'vue'
// 导入单文件组件（APP根组件）
import App from './components/App.vue'

const vm = new Vue({
        el: '#app', // 指定 vm 实例要控制的页面区域
        // 通过 render 函数，把指定的组件渲染到 el 区域中
        // 在 webpack中使用vue不是完整版，所以使用 render渲染，荤多功能都不能用
        render: h => h(App)
    })
    // 在 webpack 项目中使用 vue
    // 运行 npm i vue –S 安装 vue
    // 在 src -> index.js 入口文件中：import Vue from 'vue' 导入 vue构造函数
    // 创建 vue 的实例对象，并指定要控制的 el 区域
    // 通过 render 函数渲染 App 根组件