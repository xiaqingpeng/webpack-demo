## vue-cli 搭建脚手架工具
   1. 安装vue     npm  install  --save-dev  vue
   2. 在 main.js 引入vue     import Vue from  "vue" 
##  import Vue from  "vue" 具体内容
    1. 找到node_modules 下面的vue文件
    2. 找到pack.json中 main 和 moudule 选项的值
    3. 如果通过commonjs require 的方式引入vue ,引入的是main选项指定的文件
    4. 如果通过esm import 方式引入vue ，引入的是module选项指定的文件
     
    vue.runtine  运行时的版本    render 函数去渲染模板
    vue. 没有runtime  运行时 + 编译器(完整版) template
##  使用jQuery
     1.  安装插件  npm  install  --save-dev  copy-webpack-plugin