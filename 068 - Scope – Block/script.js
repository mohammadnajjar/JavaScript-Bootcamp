/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`); //50
}

console.log(`From Global ${x}`); //10

// var Global or let Block Scope
var x = 10;

if (10 === 10) {
  var x = 50;
  console.log(`From If Block ${x}`); //50
}

console.log(`From Global ${x}`); //50
