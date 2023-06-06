//  Syntax: fs.truncate(path, character length, callback)

const fs = require('fs')

fs.truncate('sample.txt', 10, () => {
    console.log('File content deleted!')
})
Footer