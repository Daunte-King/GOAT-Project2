const Artist = require('../models/artist')
const {find} = require('../models/artist')

module.exports = {
  index,
  show,
  new: newArtist,
  create
};

function index(req, res) {
  Artist.find({}, function(err, artists) {
    res.render('artists/index', {artists});
  });
}

function show(req, res) {
    Artist.findById(req.params.id)
      .exec(function(err, artist) {
            res.render('artists/show', { title: 'Artist Detail', artist });
          });
  }

function newArtist(req, res) {
  res.render('artists/new', { title: 'Add Artist' });
}

function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err) {
        if (err) return res.redirect('/artists/new');
        res.redirect('/artists/${artist._id}');
    });
}
