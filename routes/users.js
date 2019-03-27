const express = require('express');
const router = express.Router();
var {User} = require("../models/users.js");
var {BlogPost} = require("../models/BlogPost.js");

router.get('/login',(req,res) => res.render('login'));

router.post('/logout',(req,res) => {
	req.session = null;
	res.render('login')
});


router.get('/:NameOfAccount',(req,res) => {
	if(req.session.usersName == req.params.NameOfAccount){
		res.render('user/profile.hbs',{
			usersName: req.session.usersName
		});
	}
});


router.get('/:NameOfAccount/:AddBlogPost',(req,res) => {
	
		if(req.params.AddBlogPost == "AddBlogPost"){
		    if(req.session.usersName == req.params.NameOfAccount){
		       res.render('user/AddPost.hbs',{
			   usersName: req.session.usersName
		       });
		     }
		     else{
		     	res.render("login.hbs")
		     }
		}
		else if(req.params.AddBlogPost == "Blog"){
		       res.render('bloguser.hbs',{
               usersName: req.params.NameOfAccount
	           });
		}
		
});



router.get('/AddBlogPost',(req,res) => {
	console.log("hello")
	res.render('user/AddPost.hbs')
});


router.post('/register',(req,res) => {
	  const { name, email, password, password2 } = req.body;
	  var user = new User({
	  	email :  email,
	  	password : password,
	  	name: name
	  });
	  user.save().then((doc)=>{
        },(e)=>{
        	console.log('Unable to save user');
        });
	res.render('login')
})

router.post('/login',(req,res)=>{
	const { email, password } = req.body;
	User.findOne({email: email}).then((doc)=>{
	    if(doc.password == password){
	       	req.session.user = doc.email;
            req.session.usersName = doc.name;
            req.session.userId = doc._id.toString();
            res.redirect(req.session.usersName)
     
	      }
	    else{res.redirect('login')}
        },(e)=>{
	            res.status(400).json({message: 'A user with that email does not exist.'});
    });
	
});



router.post('/AddPost',(req,res) => {
	  const { AddPost ,header} = req.body;
	  console.log(req.body);
	  var addPost = new BlogPost({
	  	userName : req.session.usersName,
	  	Header : header,
	  	BlogPost : AddPost
	  });
	  addPost.save().then((doc)=>{
	    console.log('BlogPost saved')
        },(e)=>{
        	console.log('unable to save Post');
        });
	res.render('user/AddPost')
})

module.exports = router;