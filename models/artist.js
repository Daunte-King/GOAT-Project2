const artists = [];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = artists.findIndex(artist => artist.id === parseInt(id));
    artists.splice(idx, 1);
  }


function create(artist) {
  // Add the id
  artist.id = Date.now() % 1000000;
  // New todos wouldn't be done :)
  artist.done = false;
  artists.push(artist);
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return artists.find(artist => artist.id === parseInt(id));
  }

  function getAll() {
    return artists;
  }
