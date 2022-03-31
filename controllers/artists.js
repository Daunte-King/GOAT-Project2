const Artist = require('../models/artist')


module.exports = {
    index,
    show,
    new: newArtist,
    create,
    delete: deleteArtist,
    edit,
    update
  };

  function index(req, res) {
    Artist.find({}, function(err, artists) {
      res.render('artists/index', { title: 'All Artists', artists });
    });
  }

  function show(req, res) {
    Artist.findById(req.params.id, function(err, artist){
        res.render('artists/show', { title: 'Artist Details', artist});
    })

  }

  function newArtist(req, res) {
    res.render('artists/new', { title: 'Add Artist' });
  }

  function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err){
        if (err) return res.render('artists/new');
        console.log(artist);
        res.redirect('/artists/new');
    })
  }

  function deleteArtist(req, res) {
    artist.findByIdAndRemove (req.params.id, function(err, artist){
        res.redirect('/artists')
    })
}

async function edit(req, res){
    console.log('edit')
    const artist1 = await Artist.findById(req.params.id)
    console.log(artist1);
    res.render('artists/edit', {
        artist: artist1
    });
}

function update(req,res) {
    console.log('hitting');
    Artist.findOneAndUpdate(
      {_id: req.params.id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, artist) {
          console.log('try')
        if (err)
        {console.log('error')
        return res.redirect('/artists')};
        console.log(artist)
        res.redirect(`${artist._id}`);
      }
    );
  }
