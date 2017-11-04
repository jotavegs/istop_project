const port = 3003
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')

const express = require('express')
const app = express()
var server = require('http').createServer(app)
const cors = require('cors')
const http = require('http')

const io = require('socket.io')(server)
const socketConfig = require('./socketConfig')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors)
app.use(queryParser())

//io config
// var _http = http.Server(app);
// var _io = new io(_http, { origins: '*:*'});
socketConfig(io)

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = {server, express}


// const allowCors = require('./cors')
// server.use(allowCors)