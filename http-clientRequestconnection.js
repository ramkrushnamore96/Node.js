// syntax: request.connection

const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('ok')
})

server.listen(3000, '127.0.0.1', ()=> {
    const options = {
        port: 3000,
        host: '127.0.0.1',
        headers: {
            'Connection': 'Upgrade',
            'Upgrade':'websocket'
        }
    }

    const request = http.request(options)

    const v = request.connection

    console.log('Request socket: ', v)
    process.exit(0)
})