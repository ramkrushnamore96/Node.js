//  Syntax: fs.writeFile(filepath, data, options, callback)

const fs = require('fs')

let data = 'This is sample text!'
fs.writeFile('sample.txt', data, function(error){
    if(error) return console.error('Got error!')

    console.log('File written successfully!')
})