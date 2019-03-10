var mongoose = require("mongoose");

var answers = mongoose.model('User', {
  quation: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  answer: {
    type: String,
    require: true,
    minlength: 1
  },
  name: {
    type: String,
    require: true,
    minlength:1
  },
  
});

module.exports = {answer}