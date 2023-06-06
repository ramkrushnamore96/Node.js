// Syntax: request.connection

const http = require('http')
const port = 3000
const host = '127.0.0.1'

const server = http.createServer((request, response)=>{
    response.writeHead({'Content-Type': 'text/html'})
    response.end('Hello there!')
})

server.listen(port, host, ()=>{
    const options = {
        port: port,
        host: host,
        headers: {
            'Connection': 'Upgrade',
            'Upgrade': 'websocket'
        }
    }

    const request = http.request(options)
    let result = 'Not requested for connection'
    if(request.Connection) result = 'Requested for connection'
    console.log('request socket: ', result)

    process.exit(0)
})