const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'GOAT' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    successRedirect : '/artists',
    failureRedirect : '/artists',
    scope: ['profile', 'email'],
  }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/artists',
    failureRedirect : '/artists'
  }
));
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/artists');
});

 module.exports = router;
