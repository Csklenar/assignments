const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require('dotenv').config()

// Middleware for every request
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_URI, () => console.log('connected to database'))

//Routes
app.use("/anime", require("./routes/animeRouter.js"))

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({
        errMsg: err.message
    })
})

// 1. PORT      2. (callback function)
// Server Listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})