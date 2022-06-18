/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
 let result = [];
 let splice_arr = undefined;
 // while arr still has length aka contains elements
 while(arr.length) {
   // whatever is removed using splice becomes a new array
   // arr.splice(index to start, number of elements to delete)
   splice_arr = arr.splice(0, size);
   // this new array is pushed into results array
   result.push(splice_arr);
 }
 console.log(result);
 return result;
}

// TESTS
// console.log(chunkItUp(['a', 'b', 'c', 'd'], 2)); // -> [["a", "b"], ["c", "d"]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 2)); // [[0, 1], [2, 3], [4, 5]].
// console.log(chunkItUp([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]].
// chunkItUp([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]].
// chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkItUp([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
