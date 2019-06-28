var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  let pathObj = url.parse(req.url, true);
  console.log(pathObj);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.writeHead(200, 'success');
  res.write('北京欢迎您');
  res.end();
}).listen(8080);
