//  Syntax: path.delimiter

const path = require('path')
const process = require('process')

let delimiter = path.delimiter

console.log(delimiter)
console.log(process.env.path.split(delimiter))