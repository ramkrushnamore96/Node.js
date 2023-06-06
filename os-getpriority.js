//  Syntax: os.getPriority(pid)

const os = require('os')

// const { psList } = require('ps-list')
// import os from 'os'
// import psList from 'ps-list'
// let information = psList()
// console.log(await information)

//  return the sheduling priority of process
console.log('Priority: ', os.getPriority())