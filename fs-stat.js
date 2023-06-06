//  Syntax: fs.stat(path, options, callback)

const fs = require('fs')

fs.stat('sample.txt', function(error, stats){
    if(error) return console.error('Got error!')

    console.log(stats)
})