//  Syntax: buffer.copy( target, targetStart, sourceStart, sourceEnd )

const { Buffer } = require('buffer')

let buffer1 = Buffer.from('Hello There!')
let buffer2 = Buffer.from('for')

buffer2.copy(buffer1, 5, 0)
console.log(buffer1.toString())
