# NodeStudy

学习总结：

参考文档：https://blog.csdn.net/canxuezhang/article/details/88176839

1.node 事件驱动、非阻塞和异步I/O模型：
https://www.jianshu.com/p/14bb2b4038d3

2.require等node提示配置：
webstorm中默认只是打开ecmascript的智能提示，如果需要使用nodejs作为js的引擎，请打开nodejs的智能提示功能，
File -> Settings... -> Languages&Frameworks -> Node.js and NPM 页
Code Assistatant启用Node.js库的代码提示即可；

3.查看函数体本身：arguments.callee.toString()；// 可以查看模块的五个参数；

4.exports 和 module.exports：

    - 通过exports只能使用.的方式来向外暴露内部变量
    		exports.xxx = xxx
    
    	- 而module.exports既可以通过.的形式，也可以直接赋值
    		module.exports.xxx = xxxx
    		module.exports = {}
    		
5.查看端口占用进程，如8080端口：
lsof -i :8080

杀掉进程：可以看到进程的PID，如3931：
kill 3931