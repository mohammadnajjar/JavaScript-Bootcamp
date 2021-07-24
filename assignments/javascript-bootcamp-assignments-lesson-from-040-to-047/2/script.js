let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

friends = friends.slice(false, friends.length); // you can use splice function and you will get the same output

console.log(friends); // ["Eman", "Osama"]
