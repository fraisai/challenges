/*
capitalizeVowels

Write a function that takes a string and capitalizes every vowel in it

capitalizeVowels('hella world');  -> 'hEllA wOrld'
*/

function capitalizeVowels (str) {
  if (typeof str !== 'string') { // if input argument is not a string, return the argument
    return str;
  }

  if (str === '') { // if input argument is an empty string, return an empty string
    return '';
  }
    
  // convert all letters in str to lower case
  str = str.toLowerCase();
  // declare an empty string newStr
  let newStr = '';

  // create an object that stores all the vowels
  const vowels = {a: true, e: true, i: true, o: true, u: true};

  // iterate through each character of the input string, str, using a for loop
  for (let i = 0; i < str.length; i++) {
    // if the character at str[i] is found in the object vowel
    if (str[i] in vowels) {
      newStr += str[i].toUpperCase(); // convert that character to upper case and add it the empty string
    } else {
      newStr += str[i]; // if the character is not a vowel (aka it is NOT found in the object vowels), add it to the empty string, newStr
    }
  }

  return newStr; // return the final string

}

// Tests
// console.log(capitalizeVowels('hella world')); // -> 'hEllA wOrld'
// console.log(capitalizeVowels('HeLLa World')); // -> 'hEllA wOrld'
// console.log(capitalizeVowels('aeiou')); // -> 'AEIOU'
// console.log(capitalizeVowels('')); // -> ''
// console.log(capitalizeVowels('123')); // -> '123'
// console.log(capitalizeVowels([123, 33, 'e'])); // -> '123'
