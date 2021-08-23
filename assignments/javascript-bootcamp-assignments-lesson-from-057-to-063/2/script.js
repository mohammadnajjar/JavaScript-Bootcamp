function calculate(firstNum, secondNum, operation = "add") {
  let r = 0;
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }
  r =
    operation === "subtract"
      ? (r = firstNum - secondNum)
      : operation === "multiply"
      ? (r = firstNum * secondNum)
      : (r = firstNum + secondNum);
  console.log(r);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
