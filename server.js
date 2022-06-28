const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => 
{
    requestCount++
    response.write('vitalik: ' + requestCount)
   response.end()
})

server.listen(3003)