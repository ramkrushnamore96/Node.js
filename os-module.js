const os = require('os')

//  return the cpu architecture
console.log('CPU architecture: ', os.arch())

//  return the amount of free system memory in bytes
console.log('Free memory: ', os.freemem())

//  return the total amount of system memory in bytes
console.log('Total memory: ', os.totalmem())

//  return the list of network interfaces
console.log('List of network interfaces: ', os.networkInterfaces())

//  return the os default directory for temp files
console.log('OS default directory for temp files: ', os.tmpdir())

//  return the endianness of system
console.log('endianness: ', os.endianness())

//  return the hostname of system
console.log('hostname: ', os.hostname())

//  return the OS type name of system
console.log('OS Type: ', os.type())

//  return the OS release of system
console.log('OS release: ', os.release())