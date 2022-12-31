const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")
// const Bounty = require("..models/bounty.js")



// Get Bounty
bountyRouter.route("/")
.get((req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})


// Delete Bounty
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({
        _id: req.params.bountyId
    },
    (err, deletedBounty) => {
       if(err){
        res.status(500)
        return next(err)
       } 
       return res.status(200).send(`Successfully deleted bounty ${deletedBounty.firstName} ${deletedBounty.lastName} from the database`)
    })
})

// Update Bounty
bountyRouter.put("/:bountyId", (req, res, next) => {
   Bounty.findOneAndUpdate(
    { _id: req.params.bountyId}, // find this bounty to update
    req.body, // update the object with this data
    { new: true}, // send back the updated version please
    (err, updatedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBounty)
    }
   )
})

bountyRouter.route("/")
.post((req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
    
})

module.exports = bountyRouter