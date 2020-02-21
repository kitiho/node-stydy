var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('helloworld')
    res.end()
}).listen(8888)