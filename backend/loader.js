const serverExpress = require('./config/server')

require('./config/database')
require('./config/routes')(serverExpress)
