const restful = require('node-restful')
const mongoose = restful.mongoose

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  creatorName: { type: String, required: true },
  playersQty: { type: Number, required: true },
  players: { type: Array, required: true },
  timeout: { type: Number, required: true },
  interval: { type: Number, required: true },
  rounds: { type: Number, required: true },
  categories: { type: Array, required: true },
  words: { type: Array, required: true },
  difficulty: { type: String, required: true }
})


module.exports = restful.model('Room', roomSchema)
