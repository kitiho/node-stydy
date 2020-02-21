buf = Buffer.alloc(256)

len = buf.write('www.baidu.com')

console.log('写入字节数为：' + len);