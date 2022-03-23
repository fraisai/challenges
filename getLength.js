/*
Get the length of an array using recursion without accessing its length property.
Input: {Array} array - array whose length is sought
Output: {Number}
*/

function getLength(array) {
  if (!array[0]) {
    return 0;
  }
  array.pop()
  //return 1 + getLength(array.slice(1))
  return 1 + getLength(array)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
