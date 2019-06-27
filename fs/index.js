const fs = require('fs');

// 同步方式打开文件
// let fd = fs.openSync('./demo.txt', 'a');
//
// fs.writeSync(fd, '书山有路勤为径，学海无涯苦作舟。', 1, 1);
//
// fs.closeSync(fd);

// 异步方式打开文件
// fs.open('./demo.txt', 'w+', function (err, res) {
//   if(!err){ // 错误优先
//     console.log(res); // res：文件的描述符
//   }
// });