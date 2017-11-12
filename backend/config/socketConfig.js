module.exports = function(io){
    io.on('connection', function(socket){
        console.log('connected!')
        socket.on('chat message', function(data) {
            console.log(data + '!!!')
        })
    });
}