// syntax: request.aborted

const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('ok')
})

server.listen(port, host, ()=> {
    console.log('Server is started')

    //  Making a request
    const options = {
        port: port,
        host: host,
        headers: {
            'Connection': 'Upgrade',
            'Upgrade':'websocket'
        }
    }

    //  Getting a client request
    const request = http.request(options)

    //  Aborting the request
    request.abort()
    
    if(request.aborted) console.log('Client request has been aborted!')
    else console.log('Client request has not been aborted!')
})