module.exports = function(app, rooms) {

    app.get('/getAllRooms', function(req, res) {
        res.json(rooms);
    })
    app.post('/createRoom', function(req, res, next) {
        if(roomValidator(req.params)){
            rooms.push(req.params);
        }        
        next();
    })
    app.put('/enterRoom', function(req, res) {
        res.json();
    })
    var roomValidator = function(room){
        if (isInArray(days, "Sunday")){

        }
    }
}