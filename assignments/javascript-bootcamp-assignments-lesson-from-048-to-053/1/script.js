let start = 10;
let end = 100;
let exclude = 40;
for (let index = start; index <= end; index += 10) {
  if (index == exclude) {
    continue;
  }
  console.log(index);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
