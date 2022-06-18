// write a function "arrDimensions" that takes a (nested) array and returns the number of nesting levels in that array
// arrDimensions( [2, 5, 1] );  -> 1
// arrDimensions( [2, [5], 1] );  -> 2
// arrDimensions( [2, [5], [3]] );  -> 2
// arrDimensions( [2, [5], [3, [[16]]], 1] );  -> 4

function arrDimensions(nestedArr) {
  let subDepth = 0;
  nestedArr.forEach(el => {
    if (Array.isArray(el)) {
      subDepth = Math.max(arrDimensions(el), subDepth);
    }
  });
  return subDepth + 1;
}

// TESTS
// console.log(arrDimensions( [] )); 
// console.log(arrDimensions( [2, 5, 1] ));  // -> 1
// console.log(arrDimensions( [2, [5], 1] )); // -> 2
// console.log(arrDimensions( [2, [5], [3]] ));  // -> 2
// console.log(arrDimensions( [2, [5], [3, [[16]]], 1] )); //  -> 4
