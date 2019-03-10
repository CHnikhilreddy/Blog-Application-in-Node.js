const express = require('express');
const router = express.Router();
var {User} = require("../models/users.js");


//login page
router.get('/login',(req,res) => res.render('login'));

//register
router.get('/register',(req,res) => res.render('signup'));

router.post('/Register',(req,res) => {
	  const { name, email, password, password2 } = req.body;
	  var user = new User({
	  	email :  email,
	  	password : password,
	  	name: name
	  });
	  user.save().then((doc)=>{
        },(e)=>{
        	console.log('Unable to save todo');
        });
	res.render('login')
})

router.post('/login',(req,res)=>{
	const { email, password } = req.body;
	User.find({email: email}).then((doc)=>{
	    if(doc[0].password == password){
	       res.render('user/profile.hbs')	
	    }else{

	    }
        },(e)=>{
	            console.log('not working')
    });
	
});


module.exports = router;