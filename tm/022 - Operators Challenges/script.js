/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  Examples:
  [++a]
  - Value: 11
  - Explain: a=a+1
  [+]
  - Explain: Addition Operator
  [+][b++]
    - Value: 20
  - Explain: b=b+1
    [+]
  - Explain: Addition Operator
    [+][c++]
    - Value: 80
  - Explain: c=b+1
      [-]
  - Explain: - Operator
    [++a]
  - Value: 11
  - Explain: a=a+1
*/
/*
  Examples:
  [++a]
  - Value: 13
  - Explain: a=a+1
  [+]
  - Explain: Addition Operator
  [-][b]
    - Value: -21
  - Explain: -b
    [+]
  - Explain: Addition Operator
    [+][c++]
    - Value: 81
  - Explain: c=c+1
      [-]
  - Explain: - Operator
    [-][a++]
  - Value: -13
  - Explain: a=a+1
      [+]
  - Explain: Addition Operator
    [+a]
  - Value: 14
  - Explain: +a



*/
/*
  c=82 a=14 b=21
   81 + 21+13*21- 22*13 + 12 -1=100
  Examples:
  [--c]
  - Value: 81
  - Explain: c=c-1
  [+]
  - Explain: Addition Operator
  [+][b]
    - Value: +21
  - Explain: +b
    [+]
  - Explain: Addition Operator
   [--a]
    - Value: 13
  - Explain: a=a-1
      [*]
  - Explain: * Operator
    [+][b++]
  - Value: 21
  - Explain: b=b+1
      [-]
  - Explain: - Operator
  [+][b]
    - Value: +22
  - Explain: +b
    [*]
  - Explain: * Operator
    [a]
  - Value: 13
  - Explain: a
  [+]
    - Explain: Addition Operator

  [--a]
   Value: 12
  - Explain: a
  [-]
    - Explain: - Operator

  [+true]
   Value: a
  - Explain: 1

*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(+(++g) * +(++e) + f + -(--d)); // 173
