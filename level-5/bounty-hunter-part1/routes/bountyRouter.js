const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    {
    firstName: "Obi Wan", 
    lastName: "Kenobi",
    living: true,
    bountyAmount: 100,
    type: "Jedi",
    _id: uuidv4()
},
{
    firstName: "Qui Gon", 
    lastName: "Jinn",
    living: false,
    bountyAmount: 0,
    type: "Jedi",
    _id: uuidv4()
},
{
    firstName: "Rael", 
    lastName: "Aveross",
    living: true,
    bountyAmount: 85,
    type: "Jedi",
    _id: uuidv4()
},
{
    firstName: "Darth", 
    lastName: "Maul",
    living: false,
    bountyAmount: 85,
    type: "Sith",
    _id: uuidv4()
},
{
    firstName: "Darth", 
    lastName: "Bane",
    living: false,
    bountyAmount: 90,
    type: "Sith",
    _id: uuidv4()
}
]

// Get Bounty
bountyRouter.route("/")
.get((req, res) => {
    res.send(bounties)
})

// Delete Bounty
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountiesIndex, 1)
    res.send("Successfully deleted the bounty")
})

// Update Bounty
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountiesIndex], updatedObject)
    res.send(updatedBounty)
})

.post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})

module.exports = bountyRouter