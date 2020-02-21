var fs = require('fs')

fs.readFile('input.txt', (err, data) => {
    if (err) {
        return console.error(err)
    }
    console.log('异步读取：' + data.toString());
})

var data = fs.readFileSync('input.txt')
console.log('同步读取：'+ data.toString());