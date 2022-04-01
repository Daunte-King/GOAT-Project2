const Artist = require('../models/artist')


module.exports ={
    index,
    show,
    new: newArtist,
    create,
    edit,
    update,
    delete: deleteArtist
}

function index(req, res) {
    Artist.find({}, function(err, artists) {
        res.render('artists/index', {artists})
    })
}

function show(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
        res.render('artists/show', {title: `${Artist.name}`, Artist})
    })
}

function newArtist(req, res) {
    res.render('artists/new', {title: 'Add Artist'})
}


function create(req,res) {
    req.body.onInstagram = !!req.body.onInstagram;
    for (let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
    }
    req.body.user = req.user._id
    const artist = new Artist(req.body);
    artist.save(function(err) {
    if (err) return res.render('artists/new');
    res.redirect(`/artists/${artist._id}`);
     });
     }

function edit(req, res) {
    const artist = {id: req.params.id}
    res.render('artists/edit', {artist})
}

function update (req,res) {
    req.body.onInstagram = !!req.body.onInstagram;
    for (let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
    }
    console.log(req.body)
        Artist.findByIdAndUpdate(req.params.id, req.body, function(err, artist){
          console.log(err)
          res.redirect('/artists')
        })
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

function deleteArtist(req, res) {
    Artist.findByIdAndRemove(req.params.id, function(err){
    console.log(err)
    res.redirect('/artists');
    });
  }
