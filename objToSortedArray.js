/* objToSortedArray
*
* Write a function that takes an object and returns a nested array. These inner
* arrays will each have two elements: the key-value pairs from the object. These
* whole array should be *SORTED* in alphabetical order by the key names.
*
* var phoneNums = {
*   chris: 3429588375,
*   andy: 4829574932,
*   mildew: 9975723073
* }
* objToSortedArray(phoneNums);  -> [ ['andy', 4829574932],
*                                    ['chris', 3429588375],
*                                    ['mildew', 9975723073] ]
*
* @param {Object} obj - An Object containing key-value pairs
* @return {Array} An Array containing nested Arrays, each one of which has a key
*  value pair from the original Object. These nested arrays should be sorted.
*/

function objToSortedArray (obj) {
  // get an array of the object, obj's, property names/keys
  const keys = Object.keys(obj);

  // use the .sort method to rearrange array of keys alphabetically
  const abc_keys = keys.sort();

  // initialize an empty results array
  const result = [];

  // use .forEach method to iterate through each element of the array, abc_keys
  abc_keys.forEach(el => {
    const propArray = []; // initialize an empty array, propArray, which will contain the name of the person (key) and their corresponding phone number (value)
    propArray.push(el, obj[el]);

    // push each propArray containing the key-value pair from obj in abc order into the results array
    result.push(propArray);
  });

  return result; // return the final results array
}

// TEST: 
// var phoneNums = {
//   chris: 3429588375,
//   andy: 4829574932,
//   mildew: 9975723073
// };

// console.log(objToSortedArray(phoneNums));  // -> [ ['andy', 4829574932], ['chris', 3429588375], ['mildew', 9975723073] ]
