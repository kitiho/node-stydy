var fs = require('fs')

var rs = fs.createReadStream('input.txt')

var ws = fs.createWriteStream('output2.txt')

rs.pipe(ws)

console.log('完成');