let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
letter = letter.toUpperCase();
// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");
for (
  let index = letter.length - Array.isArray(friends), r = letter.length;
  index < friends.length;
  index++
) {
  if (friends[index][letter.length - Array.isArray(friends)] !== letter) {
    console.log(`${r++} => ${friends[index]}`);
  } else continue;
}
