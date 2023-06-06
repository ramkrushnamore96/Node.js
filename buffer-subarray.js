//  Syntax- Buffer.subarray( starting_index, ending_index )

const { Buffer } = require('buffer');

let text = Buffer.from('This is some text', 'utf-8')
console.log('Original text: ', text.toString())

let croped = text.subarray(5, 10)
console.log('croped text: ', croped.toString())