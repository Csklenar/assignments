var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!' + " " + 'Welcome to Colossal Adventure RPG' + '!' );

let askToWalk = readlineSync.question('Enter a w to walk? ')
console.log('Proceeding to walk');

let player = {
    name: userName,
        hp: 100,
            atk: "20%",
                item: "Light Saber"}

const enemies = [
{
name:"Darth Vader",
hp: 100,
atk: 50,
item: "force power"
}, 
{
name: "Bobba Fett",
hp: 90,
atk: 30,
item: "handgun"
}, 
{
name:"Count Dooku",
hp: 80,
atk: 40,
item: "armor"
}
];
console.log(enemies);

let attacked = "attack";
let run = "run";
let damage = {min: "30", max: "100"}
let chooseEnemy = [Math.floor(Math.random() * enemies.length)];

function fight(attacked, damage) {
    if(attacked == 0) {
        console.log(damage.min)
    } else {
        console.log(run)
    }
}

 function walk(enemies) {
    if (attacked == true) {
        fight()
    } else {
        console.log(run)
    }
}

function enemyAttacks() {
    let enemyAttack = damage
    if(attacked || run == true) {
        console.log(enemyAttack)
    }
}

while(hp > 0) {
    walk()
}
