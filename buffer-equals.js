// Syntax: buffer.equals(buf)
const { Buffer } = require('buffer');

let hi = Buffer.from('Hi')
let hello = Buffer.from('Hello')

console.log(hi.equals(hello))