const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Inventory Blueprint
// add enum to properties to make it to where a user can only select those options
const inventorySchema = new Schema({
    toppings: {
        type: String,
        required: true
    },
    crust: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)