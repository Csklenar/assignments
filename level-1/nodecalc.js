const readline = require("readline-sync")

const firstNum1 = readline.question("Please enter your first number? ");
console.log(firstNum1);

const secondNum2 = readline.question("Please enter your second number? ");
console.log(secondNum2);

const operations = ["add", "sub", "mul", "div"];
let userInput = readline.keyInSelect(operations, "Please enter the operation to perform: add, sub, mul, or div.");

function add(num1, num2) {
    return (a + b)
};

// function mul(num1, num2) {
//     return (a * b)
// };


function divide(num1, num2) {
    return (a * b)
}


function subtract(num1, num2) {
    return (a - b)
}


function mul(num1, num2) {
    console.log("The result is: " + (Number(num1) * Number(num2)))
}
if (userInput === 0) {
    add(num1, num2);
} else if (userInput === 1) {
    sub(num1, num2)
} else if (userInput === 2) {
    mul(firstNum1, secondNum2)
} else {
    div(num1, num2)
}


