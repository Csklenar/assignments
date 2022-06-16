// function doubleNumbers(arr){
//   const result = arr.map(function(arr) {
//     return arr * 2
//   }
//  )
//   console.log(result)
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr){
//     const arrOfStr = arr.map(num => {
//         return String(num);
//     })
//     console.log(arrOfStr);
// }
    
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr){
//   return arr.map(name => {
//     return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    // using name.charAt(0) will make the first letter in each name uppercase while using the toUpperCase method
    // using name.substring(1) makes the 2nd letter and the rest of the letters after that all lowercase using the .toLowerCase method
  //})
//}

//  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function namesOnly(arr){
//   const result = arr.map(user => {
//     return user.name
//   })
//   console.log(result)
//}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr){
//     console.log(arr)
//     return arr.map(user => {
        
//      if (user.age <= 16) {
//         console.log('username', user.name)
//          return user.name + ' ' + 'cannot go to the Matrix'
        
//     } else if(user.age >= 17) {
//         return user.name + ' ' + 'can go to the Matrix'
        // console.log("can go the Matrix")
//     }

// })
// }


// let madeStrings = makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])

// madeStrings.forEach((string, index) => {
//     console.log(string)
// })

// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

function readyToPutInTheDOM(arr) {
  return arr.map(function(obj) {
    return "<h1>" +obj.name +"</h1>" + "<h2>" + obj.age +"</h2>";
  });
}

   let result = (readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

console.log(result)
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]