/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function++

*/

let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];
for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray);

let addSelf = [];
// addSelf = myNums.map(function (el, i, arr) {
//   // console.log(`el => ${el}`);
//   // console.log(`i => ${i}`);
//   // console.log(`arr => ${arr}`);
//   // console.log(`this => ${this}`);
//   // console.log(`#############`);
//   return el + el;
// }, 10);
// addSelf = myNums.map((el) => el + el, 10);
// console.log(addSelf);
let add = (el) => el + el;
addSelf = myNums.map(add);
console.log(addSelf);
