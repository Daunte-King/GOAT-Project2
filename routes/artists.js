var express = require('express');
var router = express.Router();
const artistsCtrl = require('../controllers/artists')
const isLoggedIn = require('../config/auth');


router.get('/', artistsCtrl.index);
router.get('/new', isLoggedIn, artistsCtrl.new);
router.get('/',  artistsCtrl.create)
router.get('/:id', artistsCtrl.show);
router.get('/:id/edit', isLoggedIn, artistsCtrl.edit);
router.put('/:id', artistsCtrl.update);
router.delete('/:id', isLoggedIn, artistsCtrl.delete);

module.exports = router;
