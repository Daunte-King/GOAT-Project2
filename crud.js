require('./config/database')
const Artist = require('./models/movie');


let a;


Artist.findOne({}, function(err, artist) {
  a = artist;
});
