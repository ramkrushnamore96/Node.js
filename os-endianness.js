//  Syntax: os.endianness()

const os = require('os')

//  return the endianness of system
console.log('endianness: ', os.endianness())

switch(os.endianness()) {
    case 'LE': console.log('CPU is little endian format')
    break
    case 'BE': console.log('CPU is big endian format')
    break
    default: console.log('unknown endianness')
}