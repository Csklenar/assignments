const form = document["addItem"]
form.addEventListener("submit", function (event) {
    event.preventDefault()

    const firstItem = form.title.value
    form.title.value = "";
    console.log(firstItem);

    const li = document.createElement("li");
    li.textContent = firstItem;
    document.getElementById("list").append(li);

    const button = document.createElement("button");
});
