/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowel=['a', 'e', 'i', 'o', 'u'];
  let count=0;
  let s =str.toLowerCase();
  for(let i = 0; i < s.length; i++) {
    if(vowel.includes(s[i])){
      count++;
    }
  }
  return count;
    // Your code here
}

module.exports = countVowels;