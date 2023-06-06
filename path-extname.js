//  Syntax: path.extname(path)

const path = require('path')

console.log('File name: ', __filename)
let fileExtension = path.extname(__filename)
console.log('Current file extension is ', fileExtension)