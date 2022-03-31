const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artist: {
        type: "String",
        required: true
    },
    decade: {
        type: "String",
        required: true
    },
    genre: {
        type: "String"
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
})

module.exports = mongoose.model('Artist', artistSchema)
