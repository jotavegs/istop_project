const port = 3003
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')

const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')


const socketConfig = require('./socketConfig')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(cors) -- TODO: OLHAR PRA VER O QUE ESTÁ BARRANDO
app.use(queryParser())

//io config

const server = app.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

const io = require('socket.io')(server)
socketConfig(io)

module.exports = app


// const allowCors = require('./cors')
// server.use(allowCors)