/*
Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be the number of times that particular return value was returned.

*/

function countBy(array, callback) {
  let obj = {};
  let result = [];
  let count = 0;
  for (let i in array) {
    result.push(callback(array[i]))
  }
  for (let i in result) {
    if (Object.keys(obj).includes(result[i])) {
      count += 1;
      obj[result[i]] = count;
    } else {
      count = 0;
      obj[result[i]] = count;
    }

  }
  console.log(result)
  
  
  //iterate through array and perform callback(element)
  // object[return from callback] = number of times value was returned
  
  //returns object
  return obj;
}
// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
