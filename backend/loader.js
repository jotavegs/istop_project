const server = require('./config/server')
var rooms = [];
require('./config/database')
require('./config/routes')(server)
require('./config/roomManager')(server, rooms)