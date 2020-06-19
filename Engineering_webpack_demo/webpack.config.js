const path = require('path')
    // 配置 html-webpack-plugin 生成预览页面，就是把 src/index.js 复制到根目录下
    // npm install html-webpack-plugin –D 命令，安装生成预览页面的插件
    // 预览页面配置信息：导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 创建插件的实例对象
const htmlPlguin = new HtmlWebpackPlugin({
        template: './src/index.html', // 指定要复制到根目录下的模板文件
        filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
    })
    // 预览页面功能，最后要修改 webpack.config.js 文件中向外暴露的配置对象 如下：
    // module.exports = {
    //   plugins: [ htmlPlugin ] // plugins 数组是 webpack 打包期间会用到的一些插件列表
    //  }
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 别忘记放入插件数组

// 导出 webpack配置项
module.exports = {
        // mode: 编译模式
        // development（开发阶段）  production（项目发布阶段，代码会压缩）
        // 之后要去 package.json文件中 添加节点：
        // "scripts": "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888"
        // npm run dev 命令：启动 webpack 进行项目打包
        // 默认打包入口文件：src -> index.js
        // 默认打包出口文件：dist -> main.js
        mode: 'development',
        // 打包入口文件
        entry: path.join(__dirname, './src/index.js'),
        // 打包出口文件
        output: {
            path: path.join(__dirname, './dist'), // 输出文件的存放路径
            filename: 'bundle.js' // 输出文件的名称，默认是main.js，现在改成了左边
        },
        // 预览页面需要修改向外暴露的配置文件
        // plugins 数组是 webpack 打包期间会用到的一些插件列表
        plugins: [htmlPlguin, new VueLoaderPlugin()],
        // 配置 loader加载器
        module: {
            rules: [
                { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
                { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
                // 注意scss文件名后缀是.scss，而他的loader对应的是 sass-loader
                { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
                { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16941' },
                // exclude：表示 babel-loader 不需要处理 node_modules 中的 js 文件
                { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
                { test: /\.vue$/, use: 'vue-loader' }
            ]
        }
    }
    // wabpack自动打包功能
    // 运行 npm install webpack-dev-server –D 命令，安装支持项目自动打包的工具
    // 修改 package.json -> scripts 中的 dev 命令： "dev": "webpack-dev-server"
    // 将 src -> index.html 中，script 脚本的引用路径，修改为 "/buldle.js“
    // 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果
    // 运行 npm run dev 命令，重新进行打包
    // webpack-dev-server 会启动一个实时打包的 http 服务器
    // webpack-dev-server 打包生成的输出文件，默认放到项目根目录中，是虚拟的，不可见

// 配置自动打包相关的参数
// package.json中的配置
// --open 打包完成后自动打开浏览器页面
// --host 配置 IP 地址
// --port 配置端口
//  "scripts": {
//   "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8080"
//   },

// webpack 中加载器的基本使用
// webpack 默认只能打包处理以 .js 后缀名结尾的模块，非.js 后缀处理不了
// 需要调用 loader加载器 才可以正常打包，否则会报错！
// loader 加载器可以协助 webpack 打包处理特定的文件模块
// less-loader 可以打包处理 .less 相关的文件
// sass-loader 可以打包处理 .scss 相关的文件
// url-loader 可以打包处理 css 中与 url 路径相关的文件

// 打包处理 css 文件
// 运行 npm i style-loader css-loader -D 命令，安装处理 css 文件的 loader
// ② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：
// { test: /\.css$/, use: ['style-loader', 'css-loader'] }
// test 表示匹配的文件类型， use 表示对应要调用的 loader
// use 数组中指定的 loader 顺序是固定的
// 多个 loader 的调用顺序是：从后往前调用

// 打包处理 less 文件
// 运行 npm i less-loader less -D 命令
// 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下
// { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }

// 打包处理 scss 文件
// 运行 npm i sass-loader node-sass -D 命令
// 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下
// { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }

// 配置 postCSS 自动添加 css 的兼容前缀
// 运行 npm i postcss-loader autoprefixer -D 命令
// 在项目根目录中创建 postcss配置文件 postcss.config.js，并初始化如下配置：
// const autoprefixer = require('autoprefixer') // 导入自动添加前缀的插件
// module.exports = {
// plugins: [ autoprefixer ] // 挂载插件 }
// 在 webpack.config.js 的 module -> rules 数组中，修改 css 的 loader 规则
// { test:/\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }

// 打包样式表中的图片和字体文件
// 运行 npm i url-loader file-loader -D 命令
// 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下
// test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, 
// use: 'url-loader?limit=16940'
// ? 之后的是 loader 的参数项
// limit 用来指定图片的大小，单位是字节(byte)
// 只有小于 limit 大小的图片，才会被转为 base64 图片

// 安装babel转换器包：npm i babel-loader @babel/core @babel/runtime -D
// 安装babel语法插件相关的包：npm i @babel/preset-env @babel/plugin-transformruntime @babel/plugin-proposal-class-properties –D
// 在项目根目录中，创建 babel 配置文件 babel.config.js 并初始化
// 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下
// { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
// exclude：表示 babel-loader 不需要处理 node_modules 中的 js 文件

// 配置 vue 组件的加载器
// 运行 npm i vue-loader vue-template-compiler -D 命令
// 在 webpack.config.js 配置文件中，添加 vue-loader 的配置项如下：
// const VueLoaderPlugin = require('vue-loader/lib/plugin') // 记得放入插件数组
// 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下
// { test: /\.vue$/, loader: 'vue-loader' }

// 在 webpack 项目中使用 vue
// 运行 npm i vue –S 安装 vue
// src -> index.js 入口文件中，import Vue from 'vue' 导入 vue构造函数
// 创建 vue 的实例对象，并指定要控制的 el 区域
// 通过 render 函数渲染 App 根组件

// webpack 打包发布
// 上线之前需要通过webpack将应用进行整体打包
// 通过 package.json 文件配置打包命令，该命令默认加载webpack.config.js 配置文件
// "scripts": {
//   // 用于打包的命令
//   "build": "webpack -p",
//   // 用于开发调试的命令
//   "dev": "webpack-dev-server --open --host 127.0.0.1 --port 3000",
//   },
// npm run build 在终端读取打包配置