var buf1 = Buffer.from('菜鸟教程')
var buf2 = Buffer.from('www.vaidu.con')
var buf3 = Buffer.concat([buf1, buf2])

console.log('buf3是：' + buf3.toString());