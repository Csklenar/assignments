//function collectAnimals(...collectMoreAnimals/*your code here*/) {
//return collectMoreAnimals;
/*and here*/
//}

//console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// combineFruit = (fruit, sweets, vegetables) => {
//     return `fruit: ${fruit} sweets: ${sweets} vegetables: ${vegetables}`
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))
//=> {
//  fruit: ["apple", "pear"],
//  sweets: ["cake", "pie"],
// vegetables: ["carrot"]
//}

//Use destructuring to use the property names as variables. Destructure the object in the parameter:
//parseSentence = (location, duration) => {
//  return`We're going to have a good time in ${location} for ${duration}`
//}
//console.log(parseSentence( "Burly Idaho", "2 weeks"));

//Use array destructuring to make this code ES6:
// returnFirst = (items) => {
//     [firstItem] = items; /*change this line to be es6*/
//     return items;
// }
// console.log(items);

//Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// returnFavorites = arr =>  {
//    const [firstFav, secondFav, thirdFav] = arr;
// It is equalled to arr because if it is set to favoriteActivities it would only return magnets, snowboarding,
// and philanthropy. With it set to arr it will return any array.
//     return `"My top three favorite activities are, ${firstFav}, ${secondFav},  and  ${thirdFav}"`;
// }

// console.log(returnFavorites(favoriteActivities));

/*Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
You will need to change how the arrays are passed in. You may write it assuming you will always 
recieve three arrays if you would like to.*/
// const combineAnimals = (...arr) => {
//   const allAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals];
//   return allAnimals;
// };

// const realAnimals = ['dog', 'cat', 'mouse'];
// const magicalAnimals = ['jackolope'];
// const mysteriousAnimals = ['platypus'];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

//['dog', 'cat', 'mouse', 'jackolope', 'platypus'];

// Try to make the following function more ES6y:
// product = (a, b, c, d, e) => {
//   var numbers = [a, b, c, d, e];

//   return numbers.reduce((acc, number) => {
//     acc * number;
//   }, 1);
// };

// Make the following function more ES6y. Use at least both the rest and spread operators:

// Write some destructuring code to help this function out. Use the ES6 shorthand that
// helps make the syntax look less redundant to simplify it:
// const unshift = (arr, ...rest) => {
//   const allLetters = [...arr, ...rest];
//   return allLetters;
// };
// console.log(unshift([1, 2, 3, 4], 5, 6, 7, 8, 9));

const populatePeople = (names) => {
  return names.map((name) => {
    const [firstName, lastName] = name.split(' ');

    // your code
    return {
      firstName,
      lastName,
    };
  });
};

console.log(populatePeople(['Frank Peterson', 'Suzy Degual', 'Liza Jones']));

const [age, setAge] = useState();
const { lastName, firstName } = { firstName: 'Frank', lastName: 'Peterson' };

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
