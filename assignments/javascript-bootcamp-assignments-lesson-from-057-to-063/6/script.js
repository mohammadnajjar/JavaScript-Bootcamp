function multiply(...a) {
  r = 1;
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "string") {
      continue;
    } else if (typeof a[i] === "number") {
      a[i] = Math.trunc(a[i]);
      r *= a[i];
    }
  }
  console.log(r);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
