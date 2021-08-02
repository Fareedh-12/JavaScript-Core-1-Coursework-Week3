// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// var multiplied = numbers.map(number=> number*100);
// console.log(multiplied);
//solution 1
// function multiple(a){
//     return a*100;
// }

// var newMultiplied = numbers.map(multiple);
// console.log(newMultiplied);
//solutions 2
var newMultiplied = numbers.map(number=>number*100);
console.log(newMultiplied);