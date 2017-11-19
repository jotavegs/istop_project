module.exports = function(scope){
    scope._io = require('socket.io')(scope._httpServer)
    scope._io.on('connection', function(socket){
        console.log('connected!')
        scope._socket = socket
        scope._socket.on('loadRooms', function(data) {
            console.log('request recebido')
            console.log(scope.rooms)
            scope._socket.emit('loadRooms', scope.rooms);
        })
    });
}