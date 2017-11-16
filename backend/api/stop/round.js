var Schema = require('node-schema-object')

const playerSchema = new Schema({
  username: { type: String, required: true },
  response: { type: String, required: true },
  score: { type: Number, required: true },
})

const roundSchema = new Schema({
  roundNumber: { type: Number, required: true },
  letter: { type: String, required: true },
  players: [playerSchema]
})


module.exports = roundSchema

