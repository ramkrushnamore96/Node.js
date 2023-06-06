// Syntax: new http.Agent({options})

const http = require('http')
var agent = new http.Agent({})

const aliveAgent = new http.Agent({
    keepAlive: true,
    maxSockets: 0,
    maxSockets: 5,
})

var agent = new http.Agent({})

var createConnection = aliveAgent.createConnection

var createConnection = agent.createConnection
console.log('Connection successfully created!')
console.log(createConnection)
console.log('Connection successfully created!')
console.log('Connection:', createConnection)