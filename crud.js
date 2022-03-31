require('./config/database')
const Artist = require('./models/artist');


let a;


Artist.findOne({}, function(err, artist) {
  a = artist;
});
