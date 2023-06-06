//  Syntax: fs.unlink(path, options, callback)

const fs = require('fs')

fs.unlink('sample.txt', () => {
    console.log('File deleted!')
})
Footer