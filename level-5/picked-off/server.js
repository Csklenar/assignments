const express = require("express")
const app = express()

app.use(express.json())

app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")    
    next()
})

app.use("/items", (req, res, next) => {
    req.body = {jobTitle: "Front End Developer"}
    next()
})

app.get("/items", (req, res, next) => {
    console.log("GET REQUEST RECIEVED")
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("Server is running on Port 9000")
})