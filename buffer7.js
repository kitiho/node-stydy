var buf2 = Buffer.from('ABCD')
var buf1 = Buffer.from('ABC4545445')
var res = buf2.compare(buf1)

if(res<0){
    console.log(buf1 + '在' + buf2 + '之前');
}

else if(res === 0){
    console.log(buf1 + '和' + buf2 + '相同');
}

if(res>0){
    console.log(buf1 + '在' + buf2 + '之后');
}