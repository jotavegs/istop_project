var Schema = require('node-schema-object')
// const roundSchema = require('./round')

const playerSchema = new Schema({
  name: { type: String, required: true }
})

const categorySchema = new Schema({
  name: { type: String, required: true }
})

const letterSchema = new Schema({
  name: { type: String, required: true }
})

const roomSchema = new Schema({
  roomName: { type: String, required: true },
  creatorName: { type: String, required: true },
  playersQty: { type: Number, required: true },
  players: [playerSchema],
  // rounds: [roundSchema],
  timeout: { type: Number, required: true },
  interval: { type: Number, required: true },
  rounds: { type: Number, required: true },
  categories: [categorySchema],
  letters: [letterSchema],
  difficulty: { type: String, required: true }
})


module.exports = roomSchema

