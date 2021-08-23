function specialMix(...data) {
  // Your Code Here
  let r = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      r += data[i];
    }
    if (typeof data[i] === "string") {
      if (Number.isInteger(parseInt(data[i]))) {
        r += parseInt(data[i]);
      }
    }
  }
  if (r != 0) return r;
  else return "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
