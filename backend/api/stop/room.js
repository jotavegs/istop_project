var Schema = require('node-schema-object')
// const roundSchema = require('./round')

const playerSchema = new Schema({
  name: { type: String, required: true }
})

// const categorySchema = new Schema({
//   name: { type: String, required: true }
// })

// const letterSchema = new Schema({
//   name: { type: String, required: true }
// })

const roomSchema = new Schema({
  roomName: { type: String, required: true },
  creator: playerSchema,
  playersMaxQty: { type: Number, required: true },
  players: [playerSchema],
  // rounds: [roundSchema],
  timeout: { type: Number, required: true },
  interval: { type: Number, required: true },
  rounds: { type: Number, required: true },
  categories: [String],
  letters: [String],
  difficulty: { type: String, required: true }
})


module.exports = roomSchema

