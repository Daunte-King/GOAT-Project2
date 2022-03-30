const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    decade: {
        type: Number,
        choice: 90,
        choice: 2000,
        choice: 2010,
        choice: 2020,
        required: true
    }
})

module.exports = mongoose.model('Artist', artistSchema)
