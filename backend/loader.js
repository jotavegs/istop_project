var scope ={}
require('./config/server')(scope)
require('./config/database')
require('./config/routes')(scope)
require('./config/socketConfig')(scope)
require('./config/roomManager')(scope)
// require('./config/roundManager')(server)