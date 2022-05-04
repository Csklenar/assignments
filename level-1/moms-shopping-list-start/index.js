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
        removeItem.remove();
        console.log(removeItem)
    })

    const editButton = document.createElement("button")
    document.getElementById("list").append(editButton)
    editButton.textContent = "edit"

    editButton.addEventListener("click", function () {
        editButton.textContent = "save";
        const input = document.createElement("input")
        li.append(input);

        input.value = items;

        editButton.textContent.remove();
    })

    if (editButton.textContent = "save") {
        editButton.textContent = "edit"
    }
}
); 
