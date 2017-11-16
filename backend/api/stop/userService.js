const User = require('./user')

User.methods(['get', 'post', 'put', 'delete'])

module.exports = User
