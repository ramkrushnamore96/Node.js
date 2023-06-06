// Syntax - dns.lookupService(address, port, callback)

const dns = require('dns')

dns.lookupService('127.0.0.1', 22, (error, hostname, service)=>{
    console.log(hostname, service)
})