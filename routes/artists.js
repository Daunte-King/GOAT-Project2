var express = require('express');
var router = express.Router();
const artistsCtrl = require('../controllers/artists')
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, artistsCtrl.new);

router.post('/', isLoggedIn, artistsCtrl.create);

router.get('/', artistsCtrl.index);


router.delete('/:id', isLoggedIn, artistsCtrl.delete);


router.get('/:id', artistsCtrl.show);

router.get('/:id/edit', isLoggedIn, artistsCtrl.edit);

router.put('/:id', isLoggedIn, artistsCtrl.update);




module.exports = router;
