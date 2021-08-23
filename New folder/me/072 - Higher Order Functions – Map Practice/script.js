/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (el) {
//     return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
//   })
//   .join("");

// Arrow

let sw = swappingCases
  .split("")
  .map((el) => (el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
  .join("");
console.log(sw);

// let ins = invertedNumbers.map(function (el) {
//   return -el;
// });

//Arrow
let ins = invertedNumbers.map((el) => -el);

console.log(ins);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (el) {
//     // return isNaN(el) === true ? el : "";
//     return isNaN(parseInt(el)) ? el : "";
//   })
//   .join("");

// Arrow

let ign = ignoreNumbers
  .split("")
  .map((el) => (isNaN(parseInt(el)) ? el : ""))
  .join("");
console.log(ign);
