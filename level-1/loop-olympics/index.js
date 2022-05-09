// var arrayOfArrays = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// var newArray = [];

// for (var i = 0; i < arrayOfArrays.length; i++) {
//   for (var j = 0; j < arrayOfArrays[i].length; j++) {
//     newArray.push(arrayOfArrays[i][j]);
//   }
// }
// console.log(newArray);

// for (var i = arrayOfArrays.length - 1; i >= 0; i--) {
//     for (var j = arrayOfArrays[i].length -1; j >= 0; j--) {
//         console.log(arrayOfArrays[i][j])
//     }

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2]

// for(var i = 0; i < numbersArr.length; i++) {
//     if(numbersArr[i] % 2 === 0) {
//         console.log(numbersArr[i])
//     }
// }

//     const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

//     newArray = [];

//     for (var i = 1; i < fruit.length; i += 2) {
//     newArray.push(fruit[i])
//     console.log(fruit[i])
//     console.log(newArray);
//    }

const peopleArray = [
  {
    name: 'Harrison Ford',
    occupation: 'Actor',
  },
  {
    name: 'Justin Bieber',
    occupation: 'Singer',
  },
  {
    name: 'Vladimir Putin',
    occupation: 'Politician',
  },
  {
    name: 'Oprah',
    occupation: 'Entertainer',
  },
];

var names = [];
var occupations = [];

for (var i = 0; i < peopleArray.length; i = i + 2) {
  names.push(peopleArray[i].name);
}
for (var j = 0; j < peopleArray.length; j = j + 2) {
  occupations.push(peopleArray[j].occupation);
}
console.log(names);
console.log(occupations);

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations
