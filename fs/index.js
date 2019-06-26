const fs = require('fs');

// 打开文件
fs.open('./test.txt', 'r', function (err, res) {
  console.log(err, res);
});