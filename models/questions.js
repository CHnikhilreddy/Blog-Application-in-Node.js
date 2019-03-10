var mongoose = require("mongoose");

var question = mongoose.model('questions', {
  question: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

module.exports = {question}