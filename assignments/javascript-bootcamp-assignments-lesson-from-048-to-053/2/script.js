let start = 10;
let end = 0;
let stop = 3;
for (let index = start; index >= stop; index--) {
  if (index < start) console.log(`0${index}`);
  else console.log(index);
}
// Output
// 10;
// 09;
// 08;
// 07;
// 06;
// 05;
// 04;
// 03;
