const express = require('express')
const authorRouter = express.Router()
const Author = require("../models/author.js")
const book = require('../models/book.js')
const bookRouter = require('./bookRouter.js')

// Get All Authors
authorRouter.get("/", (req, res, next) => {
    Author.find((err, authors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})

// Get authors by search term
authorRouter.get("/search", (req, res, next) => {
    const {author} = req.query
    const pattern = new RegExp(author)
    Author.find({ name: { $regex: pattern, $options: 'i' } }, 
    (err, authors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})
//Add new Author
authorRouter.post("/", (req, res, next) => {
    const newAuthor = new Author(req.body)
    newAuthor.save((err, savedAuthor) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAuthor)
    })
})

// find books by like range
bookRouter.get("/search/bylikes", (req, res, next) => {
    book.where("likes").gte(5).exec((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})
module.exports = authorRouter