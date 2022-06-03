var readlineSync = require('readline-sync');

let userName = '';
const newItem = 'new item added to inventory';
let inventory = ['lightsaber'];


let said = false;
let defeated = false;
let encounters = 0;
let enemyName = '';


let userLocation = 'Naboo';

let user = {
  name: userName,
  hp: 100,
  atk: 20,
  item: 'Light Saber',
  hit: 2,
  inventory: [],
};
const nabooEnemies = [
  {
    name: 'Darth Vader',
    hp: 100,
    atk: 50,
    item: 'force power',
    hit: 2,
  },
  {
    name: 'Bobba Fett',
    hp: 90,
    atk: 30,
    item: 'handgun',
    hit: 2,
  },
  {
    name: 'Count Dooku',
    hp: 80,
    atk: 40,
    item: 'armor',
    hit: 2,
  },
];

const darthMaul = {
  name: 'darthMaul',
  hp: 40,
  item: 'saber crystal',
  hit: 2,
};

// set up a while loop to run all the functions
const welcome = readlineSync.question('May I have your name? ');
console.log('Welcome to Colossal Adventure RPG' + '!');

let gameLoop = true;
while (gameLoop) {
  walk()
}


function walk() {
  console.log('test');
  optionMenu = ['walk', 'run', 'playerStats', 'inventory', 'hp'];
  const option = readlineSync.keyInSelect(optionMenu, 'which option?');
  
  if (optionMenu[option] === "walk") {
    let chanceOfBeingAttacked = Math.floor(Math.random() * 100);
    console.log(chanceOfBeingAttacked)
    if(chanceOfBeingAttacked >= 50) {
      fight(darthMaul)
    }
  }

  
  if (optionMenu[option] === "run") {
    
  }
  if (optionMenu[option] === 'playerStats') {
    printUser();
  }
  if (optionMenu[option] === 'inventory') {
    console.log(user.item);
  } 
  if(optionMenu[option] === undefined){
            gameLoop = false
          }

  // have function encounters run
  // let chance = Math.floor(Math.random() * 3 + 1);
  // if (chance < 3) {
  //   safe();
  // }
  // if (chance === 3 && said !== true) {
  //   encounter();
  // }
}

// you can use when the player fights darth maul or when they die to false rather than using process.exit()

function endQuest() {
  let endJourney = readlineSync.keyInPause('You have chosen to end the quest');
  process.exit();
}

function continueQuest() {
  const journey = readlineSync.keyInYN(
    userName +
      ', There are stormtroopers in the area as well as the sith, do you want to continue? '
  );
  console.log(journey);
  if (journey === true) {
    walk();
  } else if (journey === false) {
    endQuest();
  }
}

function printUser() {
  console.clear();
  readlineSync.keyInPause(
    'Name: ' +
      userName +
      '\nHP: ' +
      user.hp +
      '\nInventory: ' +
      user.inventory +
      '\nEncounters' +
      encounters
  );
}

function safe() {
  console.clear();
  if (userLocation === 'naboo') {
    readlineSync.keyInPause('There are no enemies around');
    choice();
  }
}

function encounter() {
  console.clear();
  encounters++;
  if (encounters > 3) {
    fight(darthMaul);
  } else {
    if (userLocation === 'naboo') {
      let number = Math.floor(Math.random() * 3 + 1) - 1;
      let chosenFoe = nabooEnemies[number];
      fight(chosenFoe);
      choice();
    }
  }
}

function choice() {
  console.clear();
  let quest = readline.keyIn(
    `Would you like to: (w)continue walking or (p) print to console`,
    { limit: '$<w,p>' }
  );
  if (quest === 'w') {
    readline.keyInPause('You continue on your quest');
  } else if (quest === 'p') {
    printUser();
  }
}
function fight(creature) {
  console.clear();
  console.log(creature)
  // enemyName = creature.name;
  // enemyAttack = creature.atk;
  // enemyHp = creature.hp;
  // enemyItem = creature.item;
  engage = readlineSync.keyIn(
    'You have encountered ' + creature.name + '.' + '(a) attack or (r) run? ',
    { limit: '$<a,r>' }
  );
  engage = engage.toLowerCase();
  if (engage === 'a') {
    console.clear();
    attack(creature);
  } else if (engage === 'r') {
    run();
  }
}

function attack(creature) {
  console.clear();
  while (creature.hp > 0 || player.hp > 0) {
    //create variables for attacks, player attacks
    //figure out when you get into the attack funtion do you attack or do they attack
    // if less than zero go back to walk()
    //if player hp < 0 "game over"
    // go back and fix run()
    
    // let userAtk = user.atk;
    // let userAttack = '';
    // let enemyAttack = '';
    // let userStrike = Math.floor(Math.random() * user.hit + 1);
    // let enemyStrike = Math.floor(Math.random() * nabooEnemies.hit + 1);

    // if (creature.hp > 0) {
    //   userAttack =
    //     'attack the ' +
    //     enemyName +
    //     ` and deal ` +
    //     userAtk +
    //     ` points of damage. The `;
    //   enemyHp = enemyHp - userAtk;
    //   if (enemyHp < 0) {
    //     enemyHp = 0;
    //   } else {
    //     userAtk = `miss the` + enemyName + `deal no damage. The`;
    //   }
    //   if ((user.hp = user.hp - enemyHp)) {
    //     enemyAttack = 'attacks dealing' + enemyAttack + 'damage to you';
    //   } else {
    //     enemyAttack = `'s attack misses.`;
    //   }
    // } else if (user.hp <= 0 && enemyName !== 'darthMaul') {
    //   readline.keyInPause(
    //     `You ` +
    //       userAtk +
    //       enemyName +
    //       enemyAttack +
    //       `Your current HP is ` +
    //       user.hp +
    //       ` and the ` +
    //       enemyName +
    //       `'s current HP is ` +
    //       enemyHp +
    //       `. You have defeated the ` +
    //       enemyName
    //   );
    //   itemDrop();
    //   readline.keyInPause('Continue on your quest');
    //   engage = '';
    // } else {
    //   defeated = true;
    //   readline.keyInPause(
    //     newItem +
    //       'Light Saber: The Jedi use this weapon as there primary source for attack and defense ' +
    //       userName +
    //       `!`
    //   );
    //   inventory.push('Light Saber');
    //   victory(); // make a victory function
    //   // }else{
    //   //           fallenEnemies()  see if you need to make this function
    //   //   }
    // }
  }

  function itemDrop() {
    if (enemyName === 'Bobba Fett') {
      lightSaber();
      shieldAcquired === true;
      inventory.push(nabooEnemies.item);
      readline.keyInPause(newItem + nabooEnemies.item);
    }
  }

  function lightSaber() {
    userName.def = userName.def + 25;
  }

  // function fallenEnemies() {
  //   console.clear();
  //   engage = '';
  //   readline.keyInPause(
  //     `The Sith have defeated you ` + userName + ` ..... Try again.`
  //   );
  //   process.exit();
  // }

  function victory() {
    console.clear();
    var won = readline.keyInPause(`You have defeated the Sith!`);
    console.clear();
    process.exit();
  }

  function run() {
   //do another random number generator for a chance of escaping
   // if chance of escape is > 50 you will escape and go back to walk()
   // if less than 50 you will take damage and go back to fight()

  }
}
