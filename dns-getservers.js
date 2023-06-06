const dns = require('dns')
let server = dns.getServers()

server.forEach(element => {
    console.log(element)   
})