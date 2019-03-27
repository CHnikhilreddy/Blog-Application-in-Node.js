var express = require('express');
const session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express()
app.use(session({secret: "Shh, its a secret!"}));
const hbs = require('hbs');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var {BlogPost} = require("./models/BlogPost.js");

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.urlencoded({ extended: false}));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

io.on('connection', function(socket){
  BlogPost.find().then((BlogPost)=>{
	    io.emit('allblogposts',BlogPost);
        },(e)=>{
	            console.log('not working')
   });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
}); 

module.exports = {app,io};
