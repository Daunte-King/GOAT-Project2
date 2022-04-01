const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    decade: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },

    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
})



module.exports = mongoose.model('Artist', artistSchema);

