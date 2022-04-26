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
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); //should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups(["a", "b", "c", "d"], 2); // returns [ [ 'a', 'b' ], [ 'c', 'd' ] ]
