var mongoose = require("mongoose");

var BlogPost = mongoose.model('BlogPost', {
  BlogPost: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  Header: {
  	type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

module.exports = {BlogPost}