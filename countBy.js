/*
Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be the number of times that particular return value was returned.

*/

function countBy(array, callback) {
  let obj = {};
  let result = [];
  let count = 0; // keeps track of the number of times value appears
  
  // Store the outputs of the elements of array passed in as an argument into the callback function in result array.
  for (let i in array) {
    result.push(callback(array[i]))
  }
  
  result.forEach(el => {
    if (Object.keys(obj).includes(el) {  // if an element of result is a key in obj
      count += 1;
      obj[el] = count;
    } else {
      count = 0;
      obj[el] = count;
    }
  });

  return obj;
}
// Uncomment these to check your work!
// function evenOdd(n) {
//   if (n % 2 === 0) return 'even';
//   else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
