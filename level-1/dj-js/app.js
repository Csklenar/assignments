var hover = document.getElementById("hover")
hover.addEventListener("mouseover", function () {
    console.log("mouseover")
    hover.style.backgroundColor = "blue";
})

addEventListener("mousedown", function () {
    console.log("mousedown");
    hover.style.backgroundColor = "red";
})

addEventListener("mouseup", function () {
    console.log("mouseup")
    hover.style.backgroundColor = "yellow";
})

addEventListener("dblclick", function () {
    console.log("dblclick")
    hover.style.backgroundColor = "green";
})

addEventListener("wheel", function () {
    console.log("wheel")
    document.body.style.backgroundColor = "orange";
})

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 66) {
        hover.style.backgroundColor = "blue";
    } else if (event.keyCode === 82) {
        hover.style.backgroundColor = "red";
    }
})

 // anything