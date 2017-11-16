const restful = require('node-restful')
const mongoose = restful.mongoose

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true }
})

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }
})

const letterSchema = new mongoose.Schema({
  name: { type: String, required: true }
})

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  creatorName: { type: String, required: true },
  playersQty: { type: Number, required: true },
  players: [playerSchema],
  timeout: { type: Number, required: true },
  interval: { type: Number, required: true },
  rounds: { type: Number, required: true },
  categories: [categorySchema],
  letters: [letterSchema],
  difficulty: { type: String, required: true }
})


module.exports = restful.model('Room', roomSchema)
