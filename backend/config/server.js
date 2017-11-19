const port = 3003
const bodyParser = require('body-parser')
const queryParser = require('express-query-int')
const express = require('express')
const cors = require('cors')
const http = require('http')
// const socketConfig = require('./socketConfig')

module.exports = function(scope){
  //request parssing
  scope._app = express()
  scope._app.use(bodyParser.urlencoded({ extended: true }))
  scope._app.use(bodyParser.json())
  scope._app.use(queryParser())
  
  //initialization and definition of server
  scope._httpServer = scope._app.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
  })
  
  //rooms definition
  scope.rooms = []
}
//io config
// const io = require('socket.io')(httpServer)
// socketConfig(io, app)

// module.exports = {app, httpServer}
