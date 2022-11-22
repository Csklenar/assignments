const express = require("express")
const inventoryItemsRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

// Get All
inventoryItemsRouter.get("/", 
(req, res) => {
    res.send(inventoryItems)
})

// Get One
inventoryItemsRouter.get("/:inventoryItemsId", (req, res) => {
    const inventoryItemsId = req.params.inventoryItemsId
    const foundInventoryItems = inventoryItems.find(item => item._id === inventoryItemsId)
    res.send(foundInventoryItems)
})

// Get by Type
inventoryItemsRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredItems = inventoryItems.filter(item => item.type === type)
    res.send(filteredItems)
})

// Get by Price
// inventoryItemsRouter.get("/search/price", (req, res) => {
//     const maxPrice = req.query.maxPrice
//     const minPrice = req.query.minPrice
//     const price = req.query.price
//     const filteredPrices = inventoryItems.filter(item => item.maxPrice,  item.minPrice = price)
//     res.send(filteredPrices)
// })

.post((req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    inventoryItems.push(newItem)
    res.send(`Successfully added ${newItem.type} to the database`)
})
module.exports = inventoryItemsRouter