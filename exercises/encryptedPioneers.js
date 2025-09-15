// Write a program that decrypts the names
// of the computing pioneers using a Rot13 encryption

// algorithm
// create alphabet array
// convert name to lowercase
// rotate 13 spaces
// return rotated string.

function rot13(name) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let rotatedName = [];
  for (let letterIndex = 0; letterIndex < name.length; letterIndex++) {
    let currentLetter = name[letterIndex].toLowerCase();
    if (alphabet.indexOf(currentLetter) === -1) {
      rotatedName.push(name[letterIndex]);
      continue;
    }
    let rotatedIndex = alphabet.indexOf(currentLetter) + 13;
    if (rotatedIndex > 25) rotatedIndex -= 26;
    let rotatedLetter = alphabet[rotatedIndex];
    if (name[letterIndex].toUpperCase() === name[letterIndex]) {
      rotatedName.push(rotatedLetter.toUpperCase());
    } else {
      rotatedName.push(rotatedLetter);
    }
  }
  return rotatedName.join("");
}

console.log(rot13("Nqn Ybirynpr"));
console.log(rot13("Noqhyynu Zhunzznq voa Zhfn ny-Xujnevmzv"));
console.log(rot13("Nqryr Tbyqfgvar"));