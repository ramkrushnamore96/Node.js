//  Syntax: Buffer.alloc(size, fill, encoding)

const { Buffer } = require('buffer');

let text = Buffer.alloc(6, 'bsc')
console.log(text.toString())