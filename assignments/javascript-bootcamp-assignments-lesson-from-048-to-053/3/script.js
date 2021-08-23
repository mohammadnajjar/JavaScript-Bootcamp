let start = 1;
let end = 6;
let breaker = 2;
for (let index = start; index <= end; index++) {
  console.log(index);
  for (let j = breaker; j < end; j += breaker) {
    console.log(`-- ${j}`);
  }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
