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

myButton.addEventListener("click", function () {
    for (var i = 0; i < message.length; i++) {
        message[i].style.display = "none"

    }
})

var changeTheme = document.querySelector("#theme-drop-down")
changeTheme.addEventListener("change", function (event) {
    console.log(event.target.value)
    var messageLeft = document.querySelectorAll(".left")
    console.log(messageLeft)
    var messageRight = document.querySelectorAll(".right")
    console.log(messageRight)

    if (event.target.value === "theme-one") {
        messageLeft.forEach(message => {
            message.style.backgroundColor = "blue"
        })



        // for (var i = 0; i < messageLeft.length; i++) {
        //     messageLeft[i].style.backgroundColor = "blue"
        // } if (event.target.value === "theme-one")
        //     console.log("red/black")




        messageRight.forEach(message => {
            message.style.backgroundColor = "brown"
        })
    }
    else if (event.target.value === "theme-two") {
        messageLeft.forEach(message => {
            message.style.backgroundColor = "red"
        })
        messageRight.forEach(message => {
            message.style.backgroundColor = "black"

            message.style.color = "white"
        })


    }
});

//for loop over messages change current message bg color
// else if statement event.target.value === "theme-two"
// do another variable and for loop for message right


document.getElementById("btn").addEventListener("click", function (event) {
    //form.value = "Thank you for submitting"; 
    event.preventDefault();
    var newDiv = document.createElement("div");

    var inputValue = document.getElementById("input")
    newDiv.textContent = inputValue.value;
    newDiv.setAttribute("class", "message left");

    var messages = document.getElementsByClassName("messages");
    messages[0].append(newDiv);

    console.log(inputValue.value);
    console.log(messages);


})





