const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require ("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))

// Connect to DB
mongoose.connect(process.env.MONGODB_URI, () => console.log('connected to database'))

// Routes
app.use("/inventory", require("./routes/inventoryRouter.js"))

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})