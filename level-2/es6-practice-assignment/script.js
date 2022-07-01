// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }


// const carrots = ["bright orange", "ripe", "rotten"]

// mapVegetables = (arr) =>  arr.map(carrot  => { 
//     return { type: "carrot", name: carrot }
// })

//     console.log(mapVegetables(carrots))


//     const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

//  filterForFriendly = (arr) => arr.filter(person => {
//         return person.friendly
//     })
//     console.log(filterForFriendly(people))

// doMathSum = (a, b) => a + b
//     console.log(doMathSum)
 
// let produceProduct = (a, b) => a * b
// console.log(produceProduct)

//     let firstName = "Jane";
//     let lastName = "Doe";
//     let age = 100;
// printString = (firstName, lastName, age) => `"Hi ${firstName} ${lastName}, how does it feel to be ${age}?"`
// console.log(printString(firstName, lastName, age)); 
    
const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

 filterForDogs = arr => arr.filter(animals =>  animals.type === "dog") //? 'true' : 'false'); 

     
console.log(filterForDogs(animals));

// let location = "Hawaii";
// let name = "Janice";

// vocation = (location, name) => `"Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;

// console.log(vocation(location, name))