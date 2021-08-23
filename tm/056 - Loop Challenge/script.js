/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let sumAdmins = 0;
for (let index = 0; index < myAdmins.length; index++) {
  if (myAdmins[index] === "Stop") break;
  sumAdmins++;
}
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${sumAdmins} Admins</div>`);
document.write(`<hr>`);
for (let index = 0; index < sumAdmins; index++) {
  let sumEmployees = 0;
  document.write(
    `<p>The Admin For Team ${index + 1} is ${myAdmins[index]}</p>`
  );
  document.write(`<h2>Team Members:</h2>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[index][0]) {
      document.write(`<p>- ${++sumEmployees} ${myEmployees[j]}</p>`);
    }
  }

  document.write(`<hr>`);
}
