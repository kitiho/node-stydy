var express = require('express')
var app = express()

app.get('/', (req, res) => {
    console.log('主页get请求');
    res.send('hello get')
})
app.post('/', (req, res) => {
    console.log('主页post请求');
    res.send('hello post')
})

app.get('/del_user', (req, res) => {
    console.log('/del_user响应DELETE请求');
    res.send('删除页面')
})

app.get('/list_user', (req, res) => {
    console.log('/list_user GET请求');
    res.send('用户列表页面')
})

app.get('/ab*cd', (req, res) => {
    console.log('ab*cd GET 请求');
    res.send('正则匹配')
})

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
    console.log(`应用实例，访问地址为http://${host}:${port}`);
})