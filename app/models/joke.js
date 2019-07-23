const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  setup: {
    type: String,
    required: true
  },
  punchline: {
    type: String,
    required: true
  },
  isfunny: {
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

module.exports = mongoose.model('Joke', jokeSchema)
