/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...n) {
  let res = `${typeof n.join(", ")}`;
  res = res.slice(0, 1).toUpperCase() + res.slice(1);
  for (const i of n) {
    res += ` [${i}],`;
  }
  res += ` => Done !`;
  return res;
};
// let names = (...n) =>
//   "String " +
//   (() => {
//     let answer = "";
//     for (let word of n) {
//       answer += `[${word}], `;
//     }
//     return answer.slice(+false, answer.length - (true + true));
//   })() +
//   " => Done !";

// let names = (...n) => `${typeof n.join(" , ")} ${n.join(" , ")} => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => "???";

// console.log(calc(10, "???", "???")); // 80

let myNumbers = [20, 50, 10, 60];

// Arrow Function
let calc = (one, two, ...nums) => one + two + nums[+false][+true];

// Regular Syntax
/* 
function calc(one, two, ...nums) {
  return one + two + nums[+false][+true];
}
*/
console.log(calc(10, myNumbers[+false], myNumbers)); // 80
