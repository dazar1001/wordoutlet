const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: String,
  link: String
})

module.exports = model('Media', schema)