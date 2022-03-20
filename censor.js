/*
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 

When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be 
replaced with the second string (of a saved pair).

*/

// input: none
// output of censor: return a function

// Overall Strategy
// 1. create a cache object: store strings as key value pairs: str1 (key): str2 (value)
// 2. within the str(): figure out a way to determine the number of strings that have been passed in
// 3. if 2 strings have been passed into the str(), then store str1 and str2 as a key-value pair in the cache object
// 4. but if 1 string has been passed in, then we need to search through the given string for any instances of the first string (which was stored as a key in cache object) 
	// 4a. then once the key (str1) is located in the string, we want to replace it with the value (which we can access from the cache object cache[str1])

// censor() does NOT accept any arguments

function censor() {
  // intialize object that will hold onto the strings as a key value pair
  const cache = {};
  // str() accepts either 2 strings or 1 string
  let newstr1 = "";
  function str_obj(str1, str2) {
    // when 2 string is given, this function holds onto the 2 strings as a key-value pair
    if (str2) {
      // str1 is a property in the cache object and str2 is a value of that property
      cache[str1] = str2;
    } else {
      // when 1 string is given, 
      // the function will return the same string but all instances of a first string of a saved pair will b replaced with the second string of a saved pair
      
      // iterating through the cache object
      for (let key in cache) {
        // if the given string includes a key of the cache, then replace that key in the given string with the value of that key
        //then replace str1 with str2 using the replace() method
        // set the given string equal to the edited string
          str1 = str1.replaceAll(key, cache[key])
      }
      // return the changed given string when only 1 string is given as an argument
     return str1;
    }
     
  }
  // returns function
  return str_obj;
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
