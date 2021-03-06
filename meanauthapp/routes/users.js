const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
//Register
router.post('/register', (req,res,next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        passport: req.body.passport
    })
    User.addUser(newUser,(err,user) =>{
        if(err){
            res.json({success:false, msg:'Falied to register user'});
        }else{
            res.json({success: true, msg:'User registred successfully'});
        }
    })
});

//authenticate
router.get('/authenticate', (req,res,next) => {
    res.send('Authenticate');
});

//Profile
router.get('/profile', (req,res,next) => {
    res.send('Profile');
});

//validate
router.get('/validate', (req,res,next) => {
    res.send('validate');
});

module.exports = router;