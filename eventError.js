var events = require('events')
var emitter = new events.EventEmitter()
emitter.on('error',()=>{
    console.log('出错了');
})
emitter.emit('error')