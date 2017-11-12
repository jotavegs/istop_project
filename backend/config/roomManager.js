module.exports = function(app) {

    app.get('/createRoom', function(req, res, next) {
        app.rooms.push({teste: 'teste'})  
        res.send('sala inserida!')
    })
    app.put('/enterRoom', function(req, res) {
        res.json();
    })
    var roomValidator = function(room){
    }
}