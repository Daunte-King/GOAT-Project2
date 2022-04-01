const Artist = require('../models/artist');

module.exports = {
    create,
    delete: deleteChat
}

function create(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
        console.log(req.user)
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        artist.chats.push(req.body)
        artist.save(function(err) {
            res.redirect(`/artists/${artist._id}`)
        })

    })
}

function deleteChat(req, res, next) {
    Artist.findOne({ 'chats._id': req.params.id})
    .then(function(artist) {
        console.log(req.params.id)
        const chat = artist.chats.id(req.params.id)
        console.log(chat)
        if (!chat.user.equals(req.user._id))
        return res.redirect(`/artists/${artist._id}`)
        chat.remove()
        shinobi.save()
        .then(function() {
            res.redirect(`/artists/${artist._id}`)
        }).catch(function(err) {
            return next(err)
        })
    })
}
