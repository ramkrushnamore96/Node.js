const path = require('path')

console.log('Full path of current file: ', __filename)

let currentFolderPath = path.dirname(__filename)
console.log('Current file folder path: ', currentFolderPath)

console.log('Directory name: ', __dirname)