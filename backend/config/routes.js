const express = require('express')

module.exports = function(app) {

  // API Routes
  const router = express.Router()
  app.use('/api', router)

  // rotas da API
  const WordService = require('../api/stop/wordService')
  WordService.register(router, '/word')

  // rotas da API para uso com o BD
  // const roomService = require('../api/stop/roomService')
  // roomService.register(router, '/room' )

  const roomService = require('../api/stop/userService')
  roomService.register(router, '/user' )

}
