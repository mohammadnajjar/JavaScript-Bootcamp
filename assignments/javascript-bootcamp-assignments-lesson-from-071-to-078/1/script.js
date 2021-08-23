let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let res = mix
  .map((el) => (isNaN(el) ? el : ""))
  .reduce(function (acc, cur) {
    return `${acc}${cur}`;
  });
console.log(res);
// Elzero
