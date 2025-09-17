/*
Write a program that takes a word, and a list of possible
potentialAnagrams, and selects the correct sublist that contains
the potentialAnagrams of the word

example
listen - enlists, google, inlets, banana. Program returns inlets

potentialAnagrams have same number of letters as the original word

algorithm

create Anagram class that is constructed with a word
create a match method in the anagram class that accepts an array
of possible potentialAnagrams


*/

class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(potentialAnagrams) {
    let sortedWord = this.sortWord(this.word);
    return potentialAnagrams.filter(word => {
      return !(this.word.toLowerCase() === word.toLowerCase()) &&
        (this.isAnagram(sortedWord, this.sortWord(word)));
    });
  }

  sortWord(word) {
    return word.toLowerCase().split("").sort().join("");
  }

  isAnagram(word1, potentialAnagram) {
    return word1 === potentialAnagram;
  }
}

module.exports = Anagram;