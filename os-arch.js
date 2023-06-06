// Syntax: os.arch()

const os = require('os')

//  return the cpu architecture
console.log('CPU architecture: ', os.arch())

switch(os.arch()) {
    case 'x32': console.log('32-bit extended system')
    break
    case 'x64': console.log('64-bit extended system')
    break
    case 'arm': console.log('32-bit advanced RISC machine')
    break
    case 'arm64': console.log('64-bit extended system')
    break
    default: console.log('unknown processer')
}