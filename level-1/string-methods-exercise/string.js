// function upperCaseCorey(corey) {
//   return corey.toUpperCase() + corey.toLowerCase();
// }
// console.log(upperCaseCorey('corey'));

var hello = 'hello';
function findMiddleIndex(hello) {
  if (hello.length % 3 == 0) {
    return hello.slice(0, hello.length / 2);
  }
  return hello;
}
var newStr = hello.slice(0, hello.length / 2);
console.log(newStr.length);

var firstHalf = hello.slice(0, 3);
console.log(firstHalf);
var secondHalf = hello.slice(3, 5);
console.log(secondHalf);

var upperCaseFirstHalf = firstHalf.toUpperCase();
console.log(upperCaseFirstHalf);

var upperCaseSecondHalf = secondHalf.toLowerCase();
console.log(upperCaseSecondHalf);
