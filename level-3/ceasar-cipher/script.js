var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function ceasarCipher(str, shift) {
    let resultStr = "";
// loop through every character in the inputted string
    for(let i = 0; i < str.length; i++) {
        // line below will look up the index of char in alphabet
        let char = str[i];
        // line below inserts white space
        if(char === " ") {
            resultStr += " "
            continue;
        }
        let index = input.indexOf(char);
        // index + shift will give us the letter 7 spots over
        let newIndex = index + shift;
        // if statement below makes function loop back around
        if(newIndex > 26) {
            newIndex = newIndex - 26;
        }
        let newChar = input[newIndex];
        resultStr += newChar;
    }
    return resultStr
}
console.log(ceasarCipher(input, shift))