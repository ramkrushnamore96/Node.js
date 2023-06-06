const { Buffer } = require('buffer');

let text1 = Buffer.from('abcdew')
let text2 = Buffer.from('abcdew')
console.log(Buffer.compare(text1, text2))

// 0: If they are equal.
// 1: If buffer1 is higher than buffer2 i.e. if buffer1 should come before buffer2 when sorted.
// -1: If buffer2 is higher than buffer1 i.e. if buffer2 should come before buffer1 when sorted.