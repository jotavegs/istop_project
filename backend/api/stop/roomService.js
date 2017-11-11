const _ = require('lodash')
const Roomycle = require('./room')

RoomCycle.methods(['get', 'post', 'put', 'delete'])
RoomCycle.updateOptions({new: true, runValidators: true})

RoomCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

RoomCycle.route('count', function(req, res, next) {
  RoomCycle.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = RoomCycle
