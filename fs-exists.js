//  Syntax: fs.exists(filepath, callback)

const fs = require('fs')

fs.exists('sample.txt', function(exists){
    console.log(exists ? 'Found!' : 'Not found!')
})