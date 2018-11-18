const env = require('../.env')

var port = '' 

if(env.ambient == 'prod'){
    port = 3025
} else if(env.ambient == 'dev') {
    port = 3003
}

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function () {
    console.log(`Backend rodando na porta ${port}`)
})

module.exports = server
