const express = require('express');
const router = express.Router();
var {question} = require("../models/questions.js");

router.get('/',(req,res) => res.render('welcome'));
router.get('/addquestion',(req,res) => res.render('Addquestion'));

router.post('/addquestion',(req,res) => {
	  const { Addquestion } = req.body;
	  var Question = new question({
	  	question : Addquestion
	  });
	  Question.save().then((doc)=>{
	    console.log('quastion saved')
        },(e)=>{
        	console.log('Unable to save question');
        });
	res.render('Addquestion')
})
module.exports = router;