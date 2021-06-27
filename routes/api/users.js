const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User');
const key = require('../../config/keys').secret;
const {sendEmail} = require('../../mailgun');


router.post('/signup', (req, res) => {
    let {
        name,
        email,
        password,
        confirm_password
    } = req.body
    if(password !== confirm_password){
        return res.status(400).json({
            msg: "Password does not match."
        });
    }
    User.findOne({email: email}).then(user => {
        if(user) {
            return res.status(400).json({
                msg: 'Email is already registered.'
            });
        }
    });
    let newUser = new User({
        name,
        email,
        password
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                sendEmail(payload)
                return res.status(201).json({
                    success: true,
                    msg: 'User is now registered.'
                });
            });
        });
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(!user) {
            return res.status(404).json({
                success: false,
                msg: 'Email not found.'
            });
        }
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch){
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        user: user,
                        token: `Bearer ${token}`,
                        msg: 'You are now logged in.'
                    });
                })
            }else{
                return res.status(404).json({
                    success: false,
                    msg: "Incorrect password."
                });
            }
        })
    });
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        user: req.user
    });
});

module.exports = router;