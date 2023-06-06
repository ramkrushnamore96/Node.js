const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request,response)=>{
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.end('ok')
})

server.listen(port,host, ()=>{
    console.log('server is started')

    const options = {
        port:port,
        host:host,
        headers: {
            'Connection': 'Upgrade',
            'Upgrade':'websocket'
        }
    }
    const request = http.request(options)

    request.abort()
    request.on('abort', () => {
        console.log('client request is aborted')
    })
})