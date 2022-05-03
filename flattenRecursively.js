/*
Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.
*/

function flattenRecursively(arr, result = [], round = 0) {
  console.log("arr at the beginning: ", arr)
  console.log("result at beginning:", result)

  if (arr.length === 0) {
    console.log("base case:")
    return result
  }
  // if the 1st element of arr is an array
  if (arr[0].constructor === Array) {
    let newArr = arr[0].concat(arr.slice(1)); // concatenate first array with 2nd element   
    return flattenRecursively(newArr, result, round);
  } else {
    result.push(arr[0]);
  }
  
  console.log("final result", result)
  return flattenRecursively(arr.slice(1), result, round);
}

// console.log(flattenRecursively([ 1, [ 2, 3, [ 4 ] ] ])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([[1], {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
console.log(flattenRecursively([[[1]], [[[[[8]]]]], {}, [3, [[4, 9]]]])); //-> [1, {}, 3, 4]
let test = [[[1]]]
console.log("test", test[0][0][0])
