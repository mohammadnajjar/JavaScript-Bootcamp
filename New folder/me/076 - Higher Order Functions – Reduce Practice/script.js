/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];
let check = theBiggest.reduce((acc, cur, i, arr) =>
  cur.length >= acc.length ? cur : acc
);
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finalString = removeChars
  .filter((el) => el !== "@")
  .reduce((acc, cur) => `${acc}${cur}`);
//   .reduce((acc, cur) => acc + cur);
console.log(finalString);
