const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const WordService = require('../api/stop/wordService')
  WordService.register(router, '/word')

}
