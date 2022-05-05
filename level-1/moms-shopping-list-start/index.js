const form = document["addItem"]
form.addEventListener("submit", function (event) {
    event.preventDefault()

    const items = form.title.value
    form.title.value = "";
    console.log(items);

    const li = document.createElement("li");
    li.textContent = items;
    document.getElementById("list").append(li);


    const button = document.createElement("button");
    document.getElementById("list").append(button)
    button.textContent = "x"

    button.addEventListener("click", function () {
        console.log("Item removed");

        var removeItem = document.getElementById("list")
        li.remove();
        button.remove();
        editButton.remove();
        console.log(removeItem)
    })

    const editButton = document.createElement("button")
    document.getElementById("list").append(editButton)
    editButton.textContent = "edit"

    editButton.addEventListener("click", function () {
        const saveButton = document.createElement("button")
        saveButton.textContent = "save"
        li.append(saveButton)
        const input = document.createElement("input")
        li.append(input);

        input.value = items;
        console.log(saveButton);

        saveButton.addEventListener("click", function () {
            console.log(input.value)
            li.textContent = input.value;

        })



    })

}
); 
