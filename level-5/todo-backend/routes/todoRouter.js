const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    {
    name: "Groceries",
    description: "Need to get groceries because we are out of food",
    imageUrl: "https://bit.ly/3Enwldm",
    completed: false,
    _id: uuidv4()
}, 
{
    name: "Gym",
    description: "Go to gym to be healthy",
    imageUrl: "https://bit.ly/3VmWakL",
    completed: true,
    _id: uuidv4()
},
{
    name: "Clean living room",
    description: "Clean living room beacuse it is dirty",
    imageUrl: "https://bit.ly/3GHIxbB",
    completed: true,
    _id: uuidv4()
},
{
     name: "Take out trash",
    description: "Take trash out so it doesn't stink in the apartment",
    imageUrl: "https://bit.ly/3EyS0PK",
    completed: false,
    _id: uuidv4()
}
]

// ROUTES // 
todoRouter.route("/")
.get((req, res) => {
    res.send(todos)
})

// Get One todo
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// Delete a Todo
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo")
})

// Update a Todo
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updatedObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updatedObject)
    res.send(updatedTodo)
})

module.exports = todoRouter