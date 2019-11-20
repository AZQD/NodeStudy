var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

// 路由匹配

var routers = {
  '/a': function (req, res) {
    console.log('匹配/a');
    res.end(`匹配${JSON.stringify(req.query)}`);
  },
  '/search': function (req, res) {
    console.log(666, req.body);
    res.end(`匹配req.body.username=${req.body.username}, 匹配req.body.password=${req.body.password}`);
  }
};

http.createServer(function (req, res) {
  let pathObj = url.parse(req.url, true);
  // console.log(pathObj);
  if (pathObj.pathname === '/') {
    pathObj.pathname += 'index.html';
  }
  let filePath = path.join(__dirname, pathObj.pathname);

  let handleFn = routers[pathObj.pathname];

  if (handleFn) { // 处理路由
    req.query = pathObj.query;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // post json 解析
    var body = '';
    req.on('data', function (chunk) {
      body += chunk;
      console.log(123, body);
    }).on('end', function () {
      console.log(55, body);
      console.log(334, parseBody(body));
      req.body = parseBody(body);
      console.log(1233333, req.body);
      handleFn(req, res);
    });
    return;
  }

  fs.readFile(filePath, 'binary', function (err, fileContent) {
    if (err) {
      res.writeHead(404, 'Not Found');
      res.write('404 Not Found');
      res.end();
    } else {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.writeHead(200, 'success');
      res.write(fileContent, 'binary');
      res.end();
    }
  });
}).listen(8080);

function parseBody (body) {
  console.log(99, body);
  var obj = {};
  body.split('&').forEach(function (str) {
    obj[str.split('=')[0]] = str.split('=')[1];
  });
  console.log(44, obj);
  return obj;
}
