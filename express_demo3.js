var express = require('express')
var app = express()


app.use('/public',express.static('public'))


app.get('/',(req,res)=>{
    res.send('hello world')
})

var server = app.listen(8081,()=>{
    console.log('访问地址为127.0.0.1:8081');
})