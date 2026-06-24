//Learn how to manipulate strings and use looping statements
// in a programming language to solve practical problems.

// 1. Print last word in the sentence and its length
let s = "Hello World";
wordsArray = s.split(" ");
arrayLength = wordsArray.length;
lastWord = wordsArray[arrayLength - 1];
lastWordLength = lastWord.length;
console.log(`The last word is ${lastWord} with length ${lastWordLength}`);

// 2. Print last word in the sentence and its length by trimming the spaces
let a = " fly me to the moon ";
trimmedString = a.trim();
wordsArray1 = trimmedString.split(" ");
arrayLength1 = wordsArray1.length;
lastWord1 = wordsArray1[arrayLength1 - 1];
lastWordLength1 = lastWord1.length;
console.log(`The last word is ${lastWord1} with length ${lastWordLength1}`);

// 3. Check whether the word is anagram
function isAnagram(word1, word2) {
  let inputWord1 = word1.trim().split(" ").join("");
  let inputWord2 = word2.trim().split(" ").join("");
  let lowerCaseWord1 = inputWord1.toLowerCase();
  let lowerCaseWord2 = inputWord2.toLowerCase();
  let sortedWord1 = lowerCaseWord1.split("").sort().join("");
  let sortedWord2 = lowerCaseWord2.split("").sort().join("");
  if (sortedWord1 === sortedWord2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
isAnagram("Listen", "silent");
isAnagram("hello", "world");
