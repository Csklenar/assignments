const express = require("express")
// const inventory = require("../models/inventory.js")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")


// Get All
inventoryRouter.route("/")
.get((req, res, next) => {
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

// Get by toppings
inventoryRouter.get("/search/toppings", (req, res, next) => {
    Inventory.find({ toppings: req.query.toppings}, (err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})



inventoryRouter.route("/")
.post((req, res, next) => {
    const newInventoryItem = new Inventory(req.body)
    newInventoryItem.save((err, savedInventoryItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventoryItem)
    })
})


// Delete Request
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findByIdAndDelete({ _id: req.params.inventoryId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.toppings} from the database`)
    })
})

// Update Request
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findByIdAndUpdate(
        { _id: req.params.inventoryId},
        req.body,
        { new: true },
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

module.exports = inventoryRouter