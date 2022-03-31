const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'GOAT' });
});

// router.get('/auth/google', passport.authenticate(
//   'google',
//   {
//     successRedirect : '/songs',
//     failureRedirect : '/songs',
//     scope: ['profile', 'email'],
//   }
// ));
// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect : '/songs',
//     failureRedirect : '/songs'
//   }
// ));
// router.get('/logout', function (req, res) {
//   req.logout();
//   res.redirect('/songs');
// });

 module.exports = router;
