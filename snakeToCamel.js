/**
* snakeToCamel
*
* Write a function that takes a string and converts it from snake case to camel
* case.
*
* Your function should be able to handle underscores at the beginning or end
* of the string as well. If the underscore is the first character, it should capitalize the following letter. 
* If the underscore is the last character it should not be present on the resulting string.
*
* snake case: words_separated_by_underscores
* camel case: wordsSeparatedByCapitals
* snakeToCamel("hello_there_world");  -> "helloThereWorld"
* snakeToCamel("_hello_there_world_");  -> "HelloThereWorld"
*
* @param {String} str - The string to be camel cased
* @return {string} The resulting camel case string
*/

function snakeToCamel (str) {

  // initialize an empty string, newStr
  let newStr = '';

  // convert all characters in str to lower case
  str = str.toLowerCase();

  // If the underscore is the last character it should not be present on the resulting string.
  while (str[str.length - 1] === '_') {
    str = str.substring(0, str.length - 1);
  }

  // iterate through the characters in str using a for loop and if the underscore is the first character, it should capitalize the following letter.
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === '_') { // if the character is an '_'
      newStr += str[i + 1].toUpperCase(); // convert the character after the underscore into upper case and add it to newStr
      i += 1; // increment the index i by 1
    } else { // if the character is NOT an '_'
      newStr += str[i]; // add the character to newStr
    }
  }

  // if the 1st character in newStr is an underscore, use the slice method to exclude the first character
  if (newStr[0] === '_') {
    newStr = newStr.substring(1);
  } else { // else add the last character of str to the end of newStr
    newStr += str[str.length - 1];
  }

  return newStr; // return the final string, newStr
}
// TEST
// console.log(snakeToCamel('hello_there_world'));  // -> "helloThereWorld"
// console.log(snakeToCamel('_hello_there_world_')); // -> "HelloThereWorld"
