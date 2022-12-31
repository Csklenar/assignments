const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Anime Blueprint
const animeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Anime", animeSchema)