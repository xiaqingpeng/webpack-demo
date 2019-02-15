//这是入口文件
import Vue from 'vue'

new Vue({
    el: "#app",
    data: {
        msg: "引入vue"
    },
    //采用render函数方式去渲染页面
   /*  render: function (h) {
        return h("p", "我是一个p标签");
    } */
})