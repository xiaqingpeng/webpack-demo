//配置webpack.comfig.js文件

const path = require('path');
//引入html - webpack - plugins模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//暴露一个对象，commonjs规范
module.exports = {
    //模式
    mode: "production", //development|production
    //入口文件
    entry: './src/main.js',
    //出口文件
    output: {
        //出口位置(绝对路径)
        path: path.resolve(__dirname, "./dist"),
        //输出文件文件名
        filename: "bundle.js"
    },
    //插件
    plugins: [
        //自动生成一个html文件 在出口位置，并且在这个生成的文件自动引入打包过后的js文件
        new HtmlWebpackPlugin({
            title: "你是猪吗", //打包过后生成在dist文件夹的html文件的title标题名
            filename: "abc.html",//打包过后生成在dist文件夹的html文件的文件名
            template:"./index.html"//将项目页面入口文件作为生成的dist文件的html文件的模板
        })
    ]

}