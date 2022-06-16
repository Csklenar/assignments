// function fiveAndGreaterOnly(arr) {
//     const result = arr.filter(num => num > 5)
//     console.log(result)
//}
// test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// function evensOnly(arr) {
//     const result = arr.filter(num => num % 2 === 0)
//     console.log(result)
// }
// test
 /// [6, 8, 2]

// function fiveCharactersOrFewerOnly(arr) {
//     const result = arr.filter(str => str.length <= 5)
//     console.log(result)
// }
// test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// function peopleWhoBelongToTheIlluminati(arr){
//     const result = arr.filter(notMember => notMember.member === false)
//     console.log(result)
//}
// test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

function ofAge(arr){
    const oldEnough = arr.filter(ages => ages.age >= 18)
    console.log(oldEnough)
}
test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));
=>
[ { name: 'Angelina Jolie', age: 80 },
 { name: 'Bob Ziroll', age: 100 } ]