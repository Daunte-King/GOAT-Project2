const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')
const isLoggedIn = require('../config/auth');


router.post('/artists/:id/comments', isLoggedIn, commentsCtrl.create)



module.exports = router;
