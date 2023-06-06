//Syntax:agent.createConnection(options,callback)

const http = require('http')
var agent = new http.Agent({})

var createConnection = agent.createConnection
console.log('Connection:', createConnection)