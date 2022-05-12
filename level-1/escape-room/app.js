const readline = require("readline-sync");
const name = readline.question(" What is your name? ");
console.log("Welcome " + name + ", to Escape Room!")
console.log("You are locked in a room, in order to escape you need to find the key")

let userInput = 
[
"Put hand in hole",
"Find the key",
"Open the door"
];

let userSelect = readline.keyInSelect(userInput, "Choose an option")
let foundKey = false; 

while(foundKey === false) {
    if(userSelect === 0) {
        console.log("You died! Restart at last checkpoint")
        break;
    } else if(userSelect === 1) {
        foundKey = true;
        console.log("Congrats, you found the key!")
} else if(userSelect === 2) {
    console.log("You haven't found the key yet, keep searching!")
    userSelect = readline.keyInSelect(userInput, "Choose an option")
    } else{
        console.log("If you fail you will die")
        break;
    }
}

while(foundKey === true) {
    userSelect = readline.keyInSelect(userInput, "Now that you have the key what shall you do?")
    if(foundKey === true, userSelect === 1){
        console.log("Keep searching for a way out")
        break;
    } else if(userSelect === 0) {
        console.log("You died, now you have to search for the key again to open the door")
        break;
    } else {
        console.log("CONGRATS!, YOU HAVE COMPLETED ESCAPE ROOM!")
        break;
    }
}


