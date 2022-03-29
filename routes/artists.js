var express = require('express');
var router = express.Router();
const artistsCtrl = require('../controllers/artists');

router.get('/', artistsCtrl.index);
router.get('/new', artistsCtrl.new);
router.get('/:id', artistsCtrl.show);
router.post('/', artistsCtrl.create);
router.delete('/:id', artistsCtrl.delete);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
