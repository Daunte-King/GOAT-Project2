var path = require('path');
const Artist = require('../models/artist')

module.exports ={
    index,
    show,
    new: newArtist,
    create,
    edit,
    update
}

function index(req, res) {
    Artist.find({}, function(err, artists) {
        res.render('artists/index', {artists})
    })
}

function show(req, res) {
    Artist.findById(req.params.id, function(err, Artist) {
        res.render('artists/show', {title: `${Artist.name}`, Artist})
    })
}

function newArtist(req, res) {
    res.render('artists/new', {title: 'Add Artist'})
}


function create(req, res){
    const artist = new Artist(req.body);
    artist.save(function(err){
        if(err) return res.redirect("artists/new");
        res.redirect('/artists/${artist._id}');
    })
}

function edit(req, res) {
    const artist = {id: req.params.id}
    res.render('artists/edit', {artist})
}

function update(req, res) {
    Artist.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} , function(err, artist) {
        if (err)
        return res.redirect ('/artists/show')
        res.redirect(`/artists/show${artist._id}`)
    });
}

// function create(req, res) {
//     var obj = {
//        name: req.body.name,
//        decade: req.body.decade,
//        genre: req.body.genre
//      }
//         Artist.create(obj, (err, artists) => {
//         if (err) {
//             return res.redirect('/artists/new')
//         }
//         else {
//              artists.save();
//             res.redirect(`/artists/show`);
//         }
//     });
// }
