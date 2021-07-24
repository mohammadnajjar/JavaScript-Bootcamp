let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs
  .concat(arr1, arr2)
  .sort()
  .join("")
  .slice(arr2.length)
  .toLowerCase();
console.log(allArrs); // fxy
// console.log(
//   allArrs.concat(arr1[2], arr2[2], arr2[3]).sort().join("").toLowerCase()
// ); // fxy
