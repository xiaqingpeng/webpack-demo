##  前端模块化
    -  AMD规范 （require.js)
    -  CMD规范  (sea.js)
    -  ESM规范   (es6模块)
##  webpack搭建操作
    1. 创建项目
    2. 初始化项目  npm init -y
    3. 安装 webpack   npm  install  --save-dev webpack  webpack-cli
    4. 在项目根目录文件下创建一个src文件夹(源文件，需要被webpack打包文件)
    5. 在项目根目录文件下创建一个webpack.config.js文件 (webpack配置文件)
    6. src下面创建一个main.js(入口文件)
    7.  开始调用webpack打包 webpack命令
     -   ./node_modules/.bin/webpack
         -  npx webpack (npm 5.x+以上版本)
         -  配置pack.json的npm脚本
    8. 在项目根目录文件下创建一个index.js(项目页面入口);
    9. 安装插件HtmlWebpackPlugins    npm  install  --save-dev  html-webpack-plugin
   

##  配置webpack
    - 模式    指定打包是开发环境还是生产环境
    - 入口    指定webpack需要打包的项目入口文件
    - 出口    打包之后生成的文件
    - 加载器  默认情况下webpack只是打包js文件，如果要打包css，img文件则需要加载器处理
    - 插件    加载器处理不了事情就由插件来干

##  不需要上线文件
    1. node_modules (放资源包)
    2.  package-lock.json (包锁文件)
    3.  package.json(项目依赖资源包和描述文件信息）
    4.  index.html(项目页面入口文件)
    5.  webpack.config.js(webpack配置文件)
##  上线到服务器上的文件 
     - dist(上线文件)
       - main.js(打包入口文件)
      
##  打包两行代码为何打包成100行
    - 将webpack.config.js 中模式mode改为生产模式 production