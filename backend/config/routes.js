const express = require('express')

module.exports = function(app) {

  // API Routes
  const router = express.Router()
  app.use('/api', router)

  // rotas da API
  const WordService = require('../api/stop/wordService')
  WordService.register(router, '/word')

}
