const express = require('express');
const router = express.Router();


router.get('/',(req,res) => res.render('welcome'));

//login page
router.get('/login',(req,res) => res.render('login'));

//register
router.get('/register',(req,res) => res.render('signup'));

router.get('/blog',(req,res) => {
	res.render('blog.hbs',{
        usersName: req.session.usersName
	});
});

module.exports = router;