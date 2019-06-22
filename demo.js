// var http=require('http');
// http.createServer(function(req,res){
//   res.end('<h1>hello  bbbaaaaaaa<h1>');
//   //一个对象 调用方法     //3000  端口号
// }).listen(3000);
// // console.log(arguments);
// console.log(module);

const http = require('http');
const PORT = 7000;
// console.log(http);
http.createServer(function (request, response) {
  response.end('hello world ~');
}).listen(PORT, function () {
  console.log(`server listening on port ${PORT}`);
});