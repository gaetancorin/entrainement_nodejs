let http = require('http')

let server = http.createServer()
server.on('request', (request, response) => {
    console.log('Il y a eu une requete')
})
server.listen('80')