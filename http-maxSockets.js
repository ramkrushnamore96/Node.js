// Syntax: agent.maxSockets

const http = require('http')
const Agent = require('agentkeepalive')
const keepAliveAgent = new Agent({})

console.log(keepAliveAgent.maxSockets)

const options = {
    host: 'abc.com',
    port: 80,
    path: '/',
    method: 'GET',
    agent: keepAliveAgent
}

const request = http.request(options, (response) => {
    console.log('Statuscode: ', response.statusCode)
})

request.end()