const port = 3003
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')

const express = require('express')
const server = express()
const cors = require('cors')
const http = require('http')

const io = require('socket.io')
const socketConfig = require('./socketConfig')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

//io config
var _http = http.Server(server);
var _io = new io(_http, { origins: '*:*'});
socketConfig(_io)

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = {server, express}


// const allowCors = require('./cors')
// server.use(allowCors)