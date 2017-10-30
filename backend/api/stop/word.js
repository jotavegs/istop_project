const restful = require('node-restful')
const mongoose = restful.mongoose

const wordSchema = new mongoose.Schema({
  type: { type: String, required: true },
  word: { type: String, required: true }
})


module.exports = restful.model('Word', wordSchema)
