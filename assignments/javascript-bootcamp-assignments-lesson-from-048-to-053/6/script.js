let start = 0;
let swappedName = "elZerO";
// swappedName = swappedName.split("");

for (let index = 0; index < swappedName.length; index++) {
  // if (swappedName[index] == swappedName[index].toLowerCase()) {
  //   swappedName[index] = swappedName[index].toUpperCase();
  // } else {
  //   swappedName[index] = swappedName[index].toLowerCase();
  // }

  if (swappedName[index].isUpperCase()) {
    swappedName[index] = swappedName[index].toLowerCase();
  } else {
    swappedName[index] = swappedName[index].toUpperCase();
  }
}
console.log(swappedName.join(""));
// Output
// ("ELzERo");
