/*
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/

function objOfMatches (array1, array2, callback) {
  // Builds object
  let obj = {};
  
  for (let i = 0; i < array1.length; i ++) {
    if (callback(array1[i]) === array2[i]) {
      obj[array1[i]] = array2[i]
    }
  }
  // array1.forEach(element => {
  //   console.log(element)
  //   for (let i in array2) {
  //     console.log("array2[i]", array2[i])
  //     if (callback(element) === array2[i]) {
  //       obj[element] = array2[i];
  //     }
  //   }
  // })
  
  // test each element of 1st array with callback to see if output === corresponding element of 2nd array
  
  // if match, 1st array element = key in object: 2nd array element = value
  
  // returns object
  return obj;
}
// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
