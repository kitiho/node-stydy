var fs = require('fs')
fs.stat('./file2.js', (err, stats) => {
    console.log(stats);
})