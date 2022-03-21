/*
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

*/

function intersection(arrays) {
  const result = [];
  let first_array = arrays[0]
  //
  first_array.forEach(element => {
    let check = true;
    for (let i = 1; i < arrays.length; i++) {
      if (!arrays[i].includes(element)) {
        check = false;
        //break;
      } 
    }
    if (check) {
      result.push(element)
    }
  })
  return result;
}
// Uncomment these to check your work!
const arr1 = [10, 20, 11];
const arr2 = [10, 15, 88, 1, 5, 7, 13];
const arr3 = [11, 10, 15, 5, 20];
const arr4 = [11, 15]
console.log(intersection([arr1, arr2, arr3, arr4], )); // should log: [5, 15]

let arr5 = [1, 2, 3]
let arr6 = [1, 2, 3, 4]
console.log(intersection([arr5, arr6, [8, 8, 4], [1, 2, 3, 4, 5, 6, 7], [2, 3]]));


// METHOD 2 (Using .reduce() method)
function intersection2(arrays) {
  let arr = [];
  // flatten arrays into 1 single array
  let result = arrays.flat(Infinity);
  console.log(result)
  
  // create an object that keeps track of the number of times a number shows up in the array, result
  let obj = result.reduce((allElements, element) => {
    if (element in allElements) {
      allElements[element] += 1;
    } else {
      allElements[element] = 1;
    }
    return allElements
  }, {})
  
  for (let i in obj) {
    if (obj[i] === arrays.length) {
      arr.push(i)
    }
  }
  return arr;
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection2([arr1, arr2, arr3])); // should log: [5, 15]
