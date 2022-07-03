const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => 
{
    requestCount++
    switch (request.url) {
        case '/students':
            response.write('students')
            break;
        case '/':
            case '/courses':
                response.write('Front + back')
                break;
                default:
                    response.write('404 not found')
    }
    
   response.end()
})

server.listen(3003)