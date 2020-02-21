var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname

    console.log('收到来自' + pathname + '的请求');
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' })
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data.toString())
        }
        res.end()
    })
}).listen(3000)

console.log('服务器运行在 http://127.0.0.1:3000');