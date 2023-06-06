// Syntax: buffer.includes(value, byteOffset, encoding);
const { Buffer } = require('buffer');

const text = Buffer.from('Hello Node')
console.log(text.includes('Hello'))