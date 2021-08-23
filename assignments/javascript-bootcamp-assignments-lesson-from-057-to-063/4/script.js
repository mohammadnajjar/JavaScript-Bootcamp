function checkStatus(a, b, c) {
  let name, age, status, s;
  name =
    typeof a === "string"
      ? (name = a)
      : typeof b === "string"
      ? (name = b)
      : typeof c === "string"
      ? (name = c)
      : "no name";

  age =
    typeof a === "number"
      ? (age = a)
      : typeof b === "number"
      ? (age = b)
      : typeof c === "number"
      ? (age = c)
      : "no age";

  status =
    typeof a === "boolean"
      ? (status = a)
      : typeof b === "boolean"
      ? (status = b)
      : typeof c === "boolean"
      ? (status = c)
      : "no status";

  if (status === true) {
    s = "You Are Available For Hire";
  } else {
    s = "You Are Not Available For Hir";
  }
  console.log(`Hello ${name}, Your Age Is ${age}, ${s}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
