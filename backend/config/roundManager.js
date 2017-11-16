module.exports = function(app) {

    app.post('/createRound', function(req, res, next) {
        console.log(req.body);
        [validation, round] = roundValidator(req.body)
        if (validation) {
            app.rooms.rounds.push(round)
            res.send('Nova Rodada Criada!')
        }
        else {
            res.send('Rodada Inválida!')
        }
    })

    var roundValidator = function(json_string){
        var Round = require('../api/stop/round')
        var round = new Round(json_string)
        if (round.isErrors()){
            console.log(round.getErrors())
            return [false, '']
        }
        else {
            return [true, round]
        }
    }
}