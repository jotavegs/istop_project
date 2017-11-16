const port = 3003
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')
const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const socketConfig = require('./socketConfig')

//request parssing
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(queryParser())

//initialization and definition of server
const server = app.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

//rooms definition
app.rooms = []

//io config
const io = require('socket.io')(server)
socketConfig(io, app)

module.exports = app
