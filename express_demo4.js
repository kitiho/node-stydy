var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var multer = require('multer')
app.use(multer({ dest: '/tmp' }).array('image'))

var fs = require('fs')

var cookieParser = require('cookie-parser')

var util = require('util')

app.use(cookieParser())

app.get('/', (req, res) => {
    console.log('Cookies:' + util.inspect(req.cookies));
})

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html')
    console.log('Cookies:' + util.inspect(req.cookies));
})

app.get('/process_get', (req, res) => {
    let response = {
        'firstname': req.query.f_name,
        'lastname': req.query.l_name
    }

    console.log(response);
    res.end(JSON.stringify(response))
})

app.post('/process_post', urlencodedParser, (req, res) => {
    let response = {
        'firstname': req.body.f_name,
        'lastname': req.body.l_name
    }

    console.log(response);
    res.end(JSON.stringify(response))
})

app.post('/file_upload', (req, res) => {
    console.log(req.files[0]);
    let des_file = __dirname + '/' + req.files[0].originalname
    fs.readFile(req.files[0].path, (err, data) => {
        fs.writeFile(des_file, data, (err) => {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response))
        })
    })
})

const server = app.listen(8081, () => {
    console.log('服务器开始');
})