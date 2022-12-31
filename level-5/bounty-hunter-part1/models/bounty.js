const mongoose = require("mongoose")
const Scheme = mongoose.Schema

// Bounty Blueprint
const bountySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: String,
        required: true
    },
    bountyAmount: Number,
    type: {
        type: String,
        enum: ["jedi", "sith"],
        required: true
    }

})

module.exports = mongoose.model("Bounty", bountySchema)