const todoList = document.getElementById("todo-list")

function getData() {
    axios.get("https://api.vschool.io/coreysklenar/todo")
    .then(response => {
        console.log(response.data)
        createTodo(response.data)
        
    }
)
    .catch(error => console.log(error))
}
getData()

function createTodo(todo) {
    clearList()
    //create element
    for(let i = 0; i < todo.length; i++) {
        
        const container = document.createElement("div")
        todoList.appendChild(container)
        
        const title = document.createElement("h1")
        title.textContent = todo[i].title
        container.appendChild(title)
        
        const imageUrl = document.createElement("img")
         imageUrl.setAttribute(
        'src',
            todo[i].imgUrl,
        );
        imageUrl.style.border = "1px solid white"
        // imageUrl.src = todo[i].imgUrl
        container.appendChild(imageUrl)
        
        
        const description = document.createElement("p")
        description.textContent = "Description:" + " " + todo[i].description
        container.appendChild(description)
        
        
         
        const price = document.createElement("h4")
        price.textContent = "Price:" + " " + todo[i].price
        container.appendChild(price)

           
       
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.name = "todo-checkbox"
        checkbox.value = "value"
        container.appendChild(checkbox)
        // const updates = {
        //     completed: true
        // }
        // const otherUpdates = {
        //     completed: false
        // }
        checkbox.addEventListener("change", () => {
            let ID = todo[i]._id
        if(checkbox.checked) {
            title.style.textDecoration = "line-through"
            price.style.textDecoration = "line-through"
            let completed = {completed : true}
            axios.put(`https://api.vschool.io/coreysklenar/todo/${ID}`, completed)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        } else {
            title.style.textDecoration = "none"
            price.style.textDecoration = "none"
            let incomplete = {completed: false}
            axios.put(`https://api.vschool.io/coreysklenar/todo/${ID}`, incomplete)
            .then(res => console.log(res))
            .catch(error => console.log(error))
            }
    //          if(todo[i].completed === true){
    //     title.style.textDecoration = "line-through"
    //     price.style.textDecoration = "line-through"
    // }
        }
    )
        
        const label = document.createElement("label")
        label.textContent = "Check the box if todo is complete"
        container.appendChild(label)
        
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.style.margin = "10px"
        container.appendChild(deleteBtn)

         deleteBtn.addEventListener("click", () => {
       
        container.remove()
        let ID = todo[i]._id
        axios.delete(`https://api.vschool.io/coreysklenar/todo/${ID}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))

        
         // axios.delete() in the .then() of this axios call is where you will
       /* have the .removeChild() method
        example: when using removeChild it is parent.removeChild() */
     }
     )
 }
}             
        
//Creating a new todo using POST
const todoForm = document["todo-form"]
todoForm.addEventListener("submit", function(e){
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.url.value
    }
   
    axios.post("https://api.vschool.io/coreysklenar/todo", newTodo)
    .then(res => getData(res.data))
    .catch(error => console.log(error))

    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imageUrl.value = ""
})

function clearList () {
    const el = document.getElementById('todo-list')
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}
// img needs to value of the input