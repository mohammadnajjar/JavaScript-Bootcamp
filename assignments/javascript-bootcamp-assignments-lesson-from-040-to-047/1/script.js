let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.reverse().slice(-num).reverse()); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(Array.isArray(myFriends)).reverse()); // ["Ahmed", "Elham", "Osama"];
// Method 1
console.log(myFriends.slice(Array.isArray(num), num)); // ["Ahmed", "Elham", "Osama"]

// Method 2
console.log(myFriends.splice(Array.isArray(num), num)); // ["Ahmed", "Elham", "Osama"]

// Method 3
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

myFriends.pop();

console.log(myFriends); // ["Ahmed", "Elham", "Osama"]

// Method 4
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

myFriends.length = num;

console.log(myFriends); // ["Ahmed", "Elham", "Osama"]
