/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let name, age, status;
  // if (typeof a === "string") name = a;
  // else if (typeof b === "string") name = b;
  // else if (typeof c === "string") name = c;
  name =
    typeof a === "string"
      ? (name = a)
      : typeof b === "string"
      ? (name = b)
      : typeof c === "string"
      ? (name = c)
      : "else";
  age =
    typeof a === "number"
      ? (age = a)
      : typeof b === "number"
      ? (age = b)
      : typeof c === "number"
      ? (age = c)
      : "else";
  status =
    typeof a === "boolean"
      ? (status = a)
      : typeof b === "boolean"
      ? (status = b)
      : typeof c === "boolean"
      ? (status = c)
      : "else";
  if (status === true)
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
    );
  else
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hir`
    );
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
