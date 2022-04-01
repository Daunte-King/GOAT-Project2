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

const chatSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 5,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
})




module.exports = mongoose.model('Artist', artistSchema);
