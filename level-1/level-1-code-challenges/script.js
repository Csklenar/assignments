function getNumberOfVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']; // insert code here
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      // str[i] is a vowel!!
      count++;
    }
  }
  return count;
}

console.log(getNumberOfVowels('hello world')); // 3
console.log(getNumberOfVowels('fishing')); // 2
console.log(getNumberOfVowels('Guitar is fun'));
// make it count how many vowels there are

/*
vowels.indexOf(h) /  -1
vowels.indexOf(e)  // 1
vowels.indexOf(l)  // -1
vowels.indexOf(l) /// -1
vowels.indexOf(o) // 3

*/

let names = ['Jerry', 'Adam'];
const person = { firstName: 'Robert', lastName: 'Jones', age: 37 };
//take firstname and add it to the names array
names.push(person.firstName);
