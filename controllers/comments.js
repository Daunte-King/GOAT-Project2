const Artist = require('../models/artist');

module.exports = {
    create

}

function create(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        artist.comments.push(req.body)
        artist.save(function(err) {
            res.redirect (`/artists/${artist._id}`)
        })
    })
}
