const { Buffer } = require('node:buffer');

const buf = Buffer.from('This is some text')

buf.write('THIS', 5)

console.log(buf.toString())
