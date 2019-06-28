var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 创建静态服务
var server = http.createServer(function (req, res) {

  let pathObj = url.parse(req.url, true); // 解析URL

  if(pathObj.pathname === '/'){ // 根路径
    pathObj.pathname += 'index.html';
  }

  var filePath = path.join(__dirname, pathObj.pathname);
  // console.log(filePath); // 要加载的文件路径

  fs.readFile(filePath, 'binary', function (err, fileContent) { // binary: 二进制
    if(err){
      // console.log(err);
      res.writeHead(404, 'Not Found');
      res.write('<h1>404 Not Found</h1>');
      res.end();
    }else{
      // console.log(fileContent);//html文本
      res.setHeader('Content-type', 'text/html; charset=utf-8');
      res.write(fileContent, 'binary');
      res.end();
    }
  });
});
server.listen(8080);