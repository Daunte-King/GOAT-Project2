const Artist = require('../models/artist')


module.exports = {
    show,
    index,
    edit,
    new: newArtist,
    delete: deleteArtist,
    create,
    update
    }

function show(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
        console.log(res.locals.user, artist);
        res.render('artists/show', { title: 'Artist Details', artist});
        });
    }

function index(req, res) {
    Artist.find({}, function(err, artists) {
        console.log(artists);
        res.render('artists/index', { title: 'All Artists', artists });
    });
}

function edit(req, res) {
    Artist.findById(req.params.id, function(err, artist){
        res.render('artists/edit', {title: 'Edit Artists', artist});
    });
}

function newArtist(req, res) {
    res.render('artists/new', { title: 'Add Artist' });
}


function deleteArtist(req, res) {
    Artist.findByIdAndRemove(req.params.id, function(err, artist){
        console.log(err);
        res.redirect('/artists');
    });
}

function create(req,res) {
    console.log(req.body);
    const artist = new Artist(req.body);
    artist.save(function(err) {
        if(err) return res.render('artists/new');
        console.log(artist);
        res.redirect('/artists');
    });
}


function update (req,res) {
    Artist.findByIdAndUpdate(req.params.id, req.body, function(err, artist){
        console.log(err);
        res.redirect('/artists');
    });
}
