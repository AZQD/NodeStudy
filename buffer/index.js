console.log(typeof Buffer);
var str = "Hello world";
let buf = Buffer.from(str);
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(typeof buf);
console.log(buf.toString());

console.log('---------------');

// var buf2 = new Buffer(10);
// console.log(buf2);
//
let buf2 = Buffer.alloc(10);
console.log(buf2);
buf2[0] = 0xaa;
console.log(buf2);
console.log(buf2[0].toString(16));

console.log('---------------');

let buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
