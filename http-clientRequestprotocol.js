// Syntax: request.protocol

const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('ok')
})

server.listen(port, host, ()=> {
    //  Make a request
    const options = {
        port: port,
        host: host,
        headers: {
            'Connection': 'Upgrade',
            'Upgrade':'websocket'
        }
    }

    const request = http.request(options)

    request.protocol = 'HTTP'

    const v = request.protocol
    console.log('Protocol: ', v)
})