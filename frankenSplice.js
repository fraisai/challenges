/*
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. 
The input arrays should remain the same after the function runs. (splice will change it)

*/

function frankenSplice(arr1, arr2, n) {
 // Copy element of arr1 into arr2 (in order) and insert elements at index n of arr2

 // create a copy of arr2
 let result = arr2.slice();

 // n = starting index
 // use the spread operator "..." to insert each individual element of arr1 instead of the whole array.
 result.splice(n, 0, ...arr1)
  //return resulting array
 console.log("arr2", result)
 return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
