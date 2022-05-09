var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

vegetables.pop();
console.log('vegetables: ', vegetables);

fruit.shift();
console.log('fruit: ', fruit);

var orangeIndex = fruit.indexOf('orange');
console.log('orange: ', orangeIndex);

fruit.push('1');
console.log('fruit: ', fruit);

var lengthOfVegetbales = vegetables.length;
console.log('lengthOfVegetables: ', lengthOfVegetbales);

vegetables.push('3');
console.log('vegetables: ', vegetables);

var food = fruit.concat(vegetables);
console.log('food: ', food);

var spliceArr = food.splice(4, 2);
console.log('food: ', food);

var reversedArr = food.reverse();
console.log('reversedArr: ', reversedArr);

var result = food.toString();
console.log('result: ', result);
