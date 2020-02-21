var server = require('./route1')
var router = require('./router')

server.start(router.route)