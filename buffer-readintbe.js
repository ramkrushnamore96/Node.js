//  Syntax: buffer.readIntBE( offset, byteLen )

const { Buffer } = require('buffer');

const hex = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd])
console.log(hex.readIntBE(0, 5))