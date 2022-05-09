/* reverseChunk
Write a function that takes an array and two integers as arguments. These two 
numbers will be indices. All array elements between (and including) these 
positions should be reversed.

var zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseChunk(zeroToTen, 2, 6);  -> [0, 1, 6, 5, 4, 3, 2, 7, 8, 9, 10]
var primes = [2, 3, 5, 7, 11];
reverseChunk(primes, 1, 4);  -> [2, 11, 7, 5, 3]

* @param {Array} arr - The Array to be worked on
* @param {number} start - starting position of the chunked reverse; if provided
*  value is less than 0 then use 0
* @param {number} end - ending position of the chunked reverse; if provided value
*  is greater than or equal to the array length, then use the array length - 1
* @return {Array} The resulting Array
*/

// start and end are indices
function reverseChunk (arr, start, end) {
    // declare empty array, result
    let result = [];

    // if the indices are not valid/do not exist 
    if (arr[start] === undefined || arr[end] === undefined) {
        return arr;
    }

    // result[i] = from the start of arr[0] until the index start, 
    for (let i = 0; i < start; i++) {
        result[i] = arr[i]
    }

    // reverse the elements of arr from start to end index
    let copy = arr.slice(start, end + 1).reverse();

    // concatenate the reversed elements of arr with the current results array
    result = result.concat(copy)
    
    // result[i] = from  of arr[end] until the last element of arr
    for (let i = end + 1; i < arr.length; i++) {
        result[i] = arr[i];
    }

    return result; // return the final results array
}

// TESTS

// var zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(zeroToTen)
// console.log(reverseChunk(zeroToTen, 2, 6)); // -> [0, 1, 6, 5, 4, 3, 2, 7, 8, 9, 10]
