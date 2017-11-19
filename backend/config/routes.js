const express = require('express')

module.exports = function(scope) {

  // API Routes
  scope._router = express.Router()
  scope._app.use('/api', scope._router)

  // rotas da API
  const WordService = require('../api/stop/wordService')
  WordService.register(scope._router, '/word')

  // rotas da API para uso com o BD
  // const roomService = require('../api/stop/roomService')
  // roomService.register(scope._router, '/room' )

  const roomService = require('../api/stop/userService')
  roomService.register(scope._router, '/user' )

}
