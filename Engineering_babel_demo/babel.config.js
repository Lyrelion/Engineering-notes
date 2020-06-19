// babel配置文件
// presets：语法转换的数组，里面提供了语法转换时，用到的插件
const presets = [
        [
            '@babel/env', // 这个语法插件 在第一步有下载
            {
                targets: { // 目标浏览器
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1'
                }
            }
        ]
    ]
    // 导出{presets} 给 babel使用
module.exports = { presets }

// babel在运行之前，会读取自己的配置文件信息，根据配置文件信息进行相关语法转换