/*

// Write a function "getLength" that returns the length of a string. 
//Accomplish this without using any loops, native JS methods, or the length property.

// Recursion: base case and recursive case

// input: string
// output: number

// string = "five"
*/

function recursiveGetLength(str, i = 0) {
  // base case: condition that stops function
  if (str[i] === undefined) {
    return i;
  }
  
  console.log(str);
  
  return recursiveGetLength(str, i += 1);
}

const str = 'hey' // --> 3

// console.log(str[0]) // h 
// console.log(str[1]) // e
// console.log(str[2]) // y
// console.log(str[3]) // undefined 
console.log(recursiveGetLength(str));

