let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

console.log();
for (let index = start; index < mix.length; index++) {
  if (typeof mix[index] === "number" && mix[index]) {
    if (Array.isArray(mix) != mix[index]) console.log(mix[index]);
  }
}
// Output
// 2
// 3
// 4
