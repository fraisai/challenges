// RECURSION
/*
Write a function that takes an input character and returns that character repeated 5 times using recursion. 
For example, if the input is 'g', then the output should be 'ggggg'.
Input: {String} char
Output: {String}
*/

function repeater(char) {
  // Assign a base case
  //let count = 5
  if (char.length === 5) {
    return char;
  }
  return repeater(char + char[0]);
  //return "nothing";
//   repeater(char)
  
  
//   // stop the function when the character is repeated 5 times
  
//   // recurse the function
//   char += repeater(char)
// 	char += repeater(char)
//   char += repeater(char)
//   char += repeater(char)
//   char += repeater(char)
//   return char
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
