
function isBlockWord(word) {
  let blocks = [["b", "o"], ["g", "t"], ["v", "i"],
    ["x", "k"], ["r", "e"], ["l", "y"], ["d", "q"], ["f", "s"], ["z", "m"],
    ["c", "p"], ["j", "w"], ["n", "a"], ["h", "u"]];
  let letters = word.split("");
  for (let letter = 0; letter < letters.length; letter++) {
    let currentLetter = letters[letter].toLowerCase();

    let matchingBlock = blocks.find(block => {
      return block.includes(currentLetter);
    });
    if (!matchingBlock) return false;
    blocks.splice(blocks.indexOf(matchingBlock), 1);
  }
  return true;
}
//   for (let blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
//     let count = 0;
//     let wordArray = word.split("");
//     let currentBlock = blocks[blockIndex];
//     for (let letter = 0; letter < wordArray.length; letter++) {
//       let currentLetter = wordArray[letter].toLowerCase();
//       if (currentBlock.includes(currentLetter)) count++;
//     }
//     if (count >= 2) return false;
//   }
//   return true;
// }

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true