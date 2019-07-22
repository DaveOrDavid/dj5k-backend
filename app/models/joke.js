const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true
  },
  punchline: {
    type: String,
    required: true
  },
  isFunny: {
    type: Boolean,
    required: false

  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Activity', jokeSchema)