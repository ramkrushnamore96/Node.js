const http = require('http')

http.createServer((request, response)=> {
    response.end('This is http(hyper text transfer protocol) module-javascript')
})
.listen(3000, function(){
    console.log('Server is on port 3000')
})