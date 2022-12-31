const express = require("express")
const animeRouter = express.Router()
const Anime = require("../models/anime.js")

animeRouter.route("/")
.get((req, res, next) => {
   Anime.find((err, animes) => {
    if(err) {
        res.status(500)
        return next(err)
    }
    return res.status(200).send(animes)
   })
})

// Get One
animeRouter.get("/:animeId", (req, res, next) => {
    const animeId = req.params.animeId
    const foundAnime = animes.find(anime => anime._id === animeId)
    if(!foundAnime){
        const error = new Error(`This item with id ${animeId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundAnime)
})

// Post One
animeRouter.route("/")
.post((req, res, next) => {
   const newAnime = new Movie(req.body)
   newAnime.save((err, savedAnime) => {
    if(err) {
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedAnime)
   })
})

// Delete One
animeRouter.delete("/:animeId", (req, res, next) => {
    Anime.findOneAndDelete(
       {
        _id: req.params.animeId
       },
       (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.name} from the database`)
       }
    )
})

// Update One
animeRouter.put("/:animeId", (req, res, next) => {
    Anime.findByIdAndUpdate(
        {_id: req.params.animeId},
        req.body,
        { new: true },
        (err, updatedAnime) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedAnime)
        }
    )
})
module.exports = animeRouter