var hover = document.getElementById("hover")
hover.addEventListener("mouseover", function () {
    console.log("mouseover")
    hover.style.backgroundColor = "blue";
})

addEventListener("mousedown", function () {
    console.log("mousedown");
    hover.style.backgroundColor = "red";
})

addEventListener("mouseleave", function () {
    console.log("mouseleave")
})

 // anything