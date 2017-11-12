module.exports = function(io, app){
    io.on('connection', function(socket){
        console.log('connected!')
        socket.on('loadRooms', function(data) {
            console.log('request recebido')
            console.log(app.rooms)
            io.emit('loadRooms', app.rooms);
        })
    });
}