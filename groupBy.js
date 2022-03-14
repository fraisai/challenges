/*
Create a function groupBy that accepts an array and a callback, and returns an object. 
groupBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.
*/

function groupBy(array, callback) {
  // initialize an object 
  const obj = {};
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // keys: perform callback on each element of the array
    let element = array[i];
    let key = callback(element);
    
    // check if this key is already exists
    // if key does not exist in the object, then create a key value pair
    if (!obj[key]) {
      obj[key] = [element];
    } else {
      // if the key DOES exist in the object, push the corresponding element into the already existing array of values
      obj[key].push(element);
    }
  }
  // return object
  return obj;
}
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
