var readlineSync = require('readline-sync');

const newItem = 'new item added to inventory: ';
let inventory = ['lightsaber'];

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

const welcome = readlineSync.question('May I have your name? ');
console.log('Welcome to Colossal Adventure RPG' + '!');
let user = {
  name: welcome,
  hp: 100,
  atk: 20,
  item: 'Light Saber',
  hit: 2,
  inventory: [],
};

let gameLoop = true;
while (gameLoop) {
  walk();
}

function walk() {
  optionMenu = ['walk', 'run', 'playerStats', 'inventory', 'hp'];
  const option = readlineSync.keyInSelect(optionMenu, 'which option?');

  if (optionMenu[option] === 'walk') {
    let chanceOfBeingAttacked = Math.floor(Math.random() * 100);
    console.log(chanceOfBeingAttacked);
    if (chanceOfBeingAttacked >= 50) {
      fight(darthMaul);
    }
  }

  if (optionMenu[option] === 'playerStats') {
    printUser();
  }
  if (optionMenu[option] === 'inventory') {
    console.log(user.item);
  }
  if (optionMenu[option] === undefined) {
    gameLoop = false;
  }

  function printUser() {
    console.clear();
    readlineSync.keyInPause(
      'Name: ' + user.name + '\nHP: ' + user.hp + '\nInventory: ' + inventory
    );
  }
}

function fight(creature) {
  console.clear();
  console.log(creature);

  engage = readlineSync.keyIn(
    'You have encountered ' + creature.name + '.' + '(a) attack or (r) run? ',
    { limit: 'ar' }
  );
  engage = engage.toLowerCase();
  console.log(engage);
  if (engage === 'a') {
    console.clear();
    attack(creature);
  } else if (engage === 'r') {
    run(creature);
  }
}

function run(creature) {
  console.log('run', creature);

  let chanceOfEscaping = Math.floor(Math.random() * 100);
  let playerDamage = 15;
  if (chanceOfEscaping >= 50) {
    console.log('you have escaped');
    walk();
  } else if (chanceOfEscaping < 50) {
    console.log(
      'you have been dealt' + ' ' + playerDamage + ' ' + 'points of damage'
    );
    user.hp = user.hp - playerDamage;
  }
}

function attack(creature) {
  console.clear();
  while (creature.hp > 0 && user.hp > 0) {
    let playerAttacks = Math.floor(Math.random() * 25); //create variables for attacks, player attacks
    let enemyAttacks = Math.floor(Math.random() * 15);
    user.hp = user.hp - enemyAttacks;
    creature.hp = creature.hp - playerAttacks;
    console.log(user.hp);
    if (user.hp < 0) {
      gameLoop = false;
    } else if (creature.hp < 0) {
      console.log('You killed the enemy');
      // console.log(darthMaul.item);

      itemDrop();
      console.log(
        'You have been given HP from Darth Maul and he dropped an item'
      );
      walk();
    }
  }
  //figure out when you get into the attack funtion do you attack or do they attack
  // if less than zero go back to walk()
  //if player hp < 0 "game over"
  // go back and fix run()

  function itemDrop() {
    let itemAddedToInventory = inventory.push(creature.item);
    console.log(itemAddedToInventory);
    readlineSync.keyInPause(newItem + darthMaul.item);
  }
}
