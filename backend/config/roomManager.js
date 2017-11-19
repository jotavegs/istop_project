module.exports = function(scope) {

    scope._app.post('/createRoom', function(req, res, next) {
        console.log(req.body);
        [validation, room] = roomValidator(req.body)
        if (validation) {
            scope.rooms.push(room)
            res.send('Sala Inserida!')
            scope._socket.emit('loadRooms', scope.rooms)
            
        }
        else {
            res.send('Sala Inválida!')
        }
    })
    scope._app.put('/enterRoom', function(req, res) {
        //res.json();
    })
    var roomValidator = function(json_string){
        var Room = require('../api/stop/room')
        var room = new Room(json_string)
        if (room.isErrors()){
            console.log(room.getErrors())
            return [false, '']
        }
        else {
            return [true, room]
        }
    }
}