const express = require('express');
const router = express.Router();


router.get('/',(req,res) => res.render('welcome'));

//login page
router.get('/login',(req,res) => res.render('login'));

//register
router.get('/register',(req,res) => res.render('signup'));
router.get('/blog',(req,res) => res.render('blog'));


router.get('/users/AddBlogPost',(req,res) => {
	console.log("hello")
	res.render('user/AddPost.hbs')
});

module.exports = router;