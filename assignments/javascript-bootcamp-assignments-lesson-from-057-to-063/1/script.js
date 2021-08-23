function sayHello(theName, theGender = "") {
  if (theGender === "Male") {
    theGender = "Mr";
    console.log(`Hello ${theGender} ${theName}`);
  } else if (theGender === "Female") {
    theGender = "Miss";
    console.log(`Hello ${theGender} ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
