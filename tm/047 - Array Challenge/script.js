/*
  Array Challenge
  https://elzero.org/javascript-array-methods-challenge/
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.reverse().splice(0, 2);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(my.concat("Osama").reverse().slice(counter)); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(Array.isArray(my), counter)); // ["Elham", "Mazero"]

console.log(my.concat("Elzero").slice(my.length).toString()); // "Elzero"
// console.log(my.concat("Elzero").slice(-Array.isArray(my))); // "Elzero"
my.splice(0, 4, "Elzero");
console.log(
  `${my.toString().slice(-counter + Array.isArray(my), -Array.isArray(my))}${my
    .toString()
    .slice(-Array.isArray(my))
    .toUpperCase()}`
); // "rO"



// my.length = counter + Array.isArray(my);
// console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(Array.isArray(my), counter)); // ["Elham", "Mazero"]

// console.log(
//   my.slice(Array.isArray(my), counter)[0].slice(0, 2) +
//     my.slice(Array.isArray(my), counter)[1].slice(2)
// ); // "Elzero"

// console.log(my[2].charAt(4) + my[2].charAt(5).toUpperCase()); // "rO"
