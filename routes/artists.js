var express = require('express');
var router = express.Router();
const artistsCtrl = require('../controllers/artists')
const isLoggedIn = require('../config/auth');




router.get('/', artistsCtrl.index)
router.get('/new', artistsCtrl.new)
router.get('/:id', artistsCtrl.show)
router.get('/', artistsCtrl.create)

module.exports = router;
