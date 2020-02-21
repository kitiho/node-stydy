var events = require('events')

var eventEmitter = new events.EventEmitter()

//监听器1
var l1 = ()=>{
    console.log('l1执行');
}

//监听器2
var l2 = ()=>{
    console.log('l2执行');
}

eventEmitter.addListener('connection',l1)
eventEmitter.on('connection',l2)

var eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器监听连接事件');

//处理connection事件
eventEmitter.emit('connection')

//移除l1
eventEmitter.removeListener('connection',l1)
console.log('l1不再监听');

eventEmitter.emit('connection')

eventListeners = eventEmitter.listenerCount('connection')
console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');