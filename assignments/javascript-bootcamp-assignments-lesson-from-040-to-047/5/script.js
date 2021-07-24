let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.indexOf(needle)) {
  console.log(`Found`);
}
if (haystack.lastIndexOf(needle)) {
  console.log(`Found`);
}
if (haystack.includes(needle)) {
  console.log(`Found`);
}
if (
  haystack.indexOf(needle) ||
  haystack.includes(needle) ||
  haystack.lastIndexOf(needle)
) {
  console.log(`Found`);
}

// haystack.includes(needle) ? console.log("Found") : console.log(-1);
// haystack.indexOf(needle) !== -1 ? console.log("Found") : console.log(-1);
// needle == haystack[1] ? console.log("Found") : console.log("Not Found");
// needle === haystack[1] ? console.log("Found") : console.log("Not Found");

// haystack.shift();
// haystack.pop();

// needle === haystack.toString()
//   ? console.log("Found")
//   : console.log("Not
