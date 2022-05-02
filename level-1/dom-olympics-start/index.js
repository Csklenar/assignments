var header = document.getElementById("header")
header.textContent = "Javascript Made This!!!"
header.style.textAlign = "center";
header.style.fontSize = "50px";
console.log(header);



var mySpan = document.getElementById("span")
mySpan.textContent = "Corey Sklenar"
mySpan.style.color = "blue"
mySpan.style.textAlign = "center"
mySpan.style.fontSize = "20px";
console.log(mySpan);

var secondSpan = document.getElementById("second-span")
secondSpan.textContent = "wrote this Javascript."
secondSpan.style.textAlign = "center";
secondSpan.style.fontSize = "20px";
console.log(secondSpan)

var message = document.getElementsByClassName("message")
message[0].textContent = "Where are you from?";
message[1].textContent = "I am from Ohio";
message[2].textContent = "What about you?";
message[3].textContent = "I am from Texas";
console.log(message);

var myButton = document.getElementById("clear-button")
// myButton.addEventListener("click", function () {
//     for (var i = 0; i < message.length; i++) {
//         message[i].remove();
//     }

//     console.log(message);
// })
myButton.addEventListener("click", function () {
    for (var i = 0; i < message.length; i++) {
        message[i].style.display = "none"

    }
})

var changeTheme = document.querySelector("#theme-drop-down")
changeTheme.addEventListener("change", function (event) {
    console.log(event.target.value)
    if (event.target.value === "theme-one") {
        console.log("blue/brown")


        var messageLeft = document.querySelectorAll(".left")
        console.log(messageLeft)
        for (var i = 0; i < messageLeft.length; i++) {
            messageLeft[i].style.backgroundColor = "blue"
        } if (event.target.value === "theme-two")
            console.log("red/black")



        var messageRight = document.querySelectorAll(".right")
        console.log(messageRight)
        for (var i = 0; i < message.length; i++)
            messageRight[i].style.backgroundColor = "red"
        console.log("red/black")
    }
}
);

    //for loop over messages change current message bg color
    // else if statement event.target.value === "theme-two"
    // do another variable and for loop for message right




