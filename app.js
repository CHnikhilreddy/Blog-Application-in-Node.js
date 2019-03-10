const express = require('express')
const hbs = require('hbs');
const http = require("http");
const socketIO = require('socket.io')

const app = express()
const PORT = process.env.PORT || 3000

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
var server = http.createServer(app);

app.use(express.urlencoded({ extended: false}));


//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.listen(PORT,()=>{
	console.log("server is running on 3000 ")
});

module.exports = {server}