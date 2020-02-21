//创建一个长度为10，用0填充的Buffer
const buf1 = Buffer.alloc(10)

//创建一个长度为9 用0x1填充的Buffer
const buf2 = Buffer.alloc(9,1)

//创建一个长度为8，未初始化的Buffer
//这个方法比alloc更快
const buf3 = Buffer.allocUnsafe(8)

//创建一个包含[0x1,0x2,0x3]的Buffer
const bu4 = Buffer.from([1,2,3])

//创建一个包含utf-8字节will的Buffer
const buf5 = Buffer.from('will')

//创建一个lation-1字节的
const buf6 = Buffer.from('will','latin1')
