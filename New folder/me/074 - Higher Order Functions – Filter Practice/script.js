/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
  .split(" ")
  .filter((el) => el.length <= 4)
  .join(" ");
console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers
  .split("")
  .filter((el) => isNaN(el))
  .join("");
console.log(ign);
let ignMap = ignoreNumbers
  .split("")
  .map((el) => (isNaN(parseInt(el)) ? el : ""))
  .join("");
console.log(ignMap);
// Filter Strings + Multiply
let mix = "A13BS2ZX";
let mixedContent = mix
  .split("")
  .filter((el) => !isNaN(el))
  .map((el) => el * el)
  .join("");
console.log(mixedContent);
