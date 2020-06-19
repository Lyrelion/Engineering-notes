1.下载 babel相关依赖包
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node 

npm install --save @babel/polyfill 


2.项目跟目录创建 babel配置文件 babel.config.js

3.
npx babel-node index.js 执行入口文件

————————————————————————————————————————

文件介绍

index.js：一般是入口文件，npx执行文件，在里面导入成员
m1.js：成员导出文件
m2.js：普通js文件
babel.config.js：babel配置文件









