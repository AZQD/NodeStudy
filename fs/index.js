const fs = require('fs');

// 同步文件的写入
// let fd = fs.openSync('./demo.txt', 'a');
//
// fs.writeSync(fd, '书山有路勤为径，学海无涯苦作舟。', 1, 1);
//
// fs.closeSync(fd);

// 异步文件写入
// fs.open('./demo.txt', 'w+', function (err, fd) {
//   if(!err){ // 错误优先
//     console.log(fd); // res：文件的描述符
//     fs.write(fd, '111', 1, function (err) {
//       if(!err){
//         console.log('写入成功');
//       }
//       fs.close(fd, function (err) {
//         if(!err){
//           console.log('文件已关闭');
//         }
//       });
//     });
//   }
// });

// 简单文件写入
// fs.writeFile('./demo.txt', 'hello', {flag: 'a+'}, function (err) {
//   if(!err){
//     console.log('写入成功');
//   }
// });
//
// // 简单文件读取
// fs.readFile('./demo.txt', function (err, data) {
//   if(!err){
//     console.log(data);
//     console.log(data.toString());
//   }
// })

//流式文件写入
// var ws = fs.createWriteStream('./demo.txt');
//
// ws.once('open', function () {
//   console.log('流打开了');
// });
// ws.once('end', function () {
//   console.log('流关闭了');
// });
//
// ws.write('111');
// ws.write('222');
// ws.end();

// 流式文件读取

// var rs = fs.createReadStream('./demo.txt');
// var ws = fs.createWriteStream('./demo1.txt');
// rs.pipe(ws);

// rs.once('open', function () {
//   console.log('可读流打开了');
// });
//
// rs.once('close', function () {
//   console.log('可读流关闭了');
// });