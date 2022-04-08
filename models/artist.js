const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: { type: String, required: true }
  });

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
    comments:[commentSchema],

    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
})



module.exports = mongoose.model('Artist', artistSchema);
