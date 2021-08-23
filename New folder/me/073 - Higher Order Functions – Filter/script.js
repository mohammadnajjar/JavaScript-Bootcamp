// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let startA = friends.filter((el) => el.startsWith("A"));
console.log(startA);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
let even = numbers.filter((el) => el % 2 === 0);
console.log(even);

// Test
// let testMap = numbers.map(function (el) {
//   return el + el;
// });
// console.log(testMap);
// let testFilter = numbers.filter(function (el) {
//   return el + el;
// });
// console.log(testFilter);
