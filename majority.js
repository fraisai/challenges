/*
Create a function majority that accepts an array and a callback. 
The callback will return either true or false. 
majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the 
return values from the callback are true. 

If the number of true returns is equal to the number of false returns, majority should return false.

*/

function majority(array, callback) {
  // iterate through array
  let true_count = 0;
  let false_count = 0;
  let answer = true;
  array.forEach(element => {
    if (callback(element) === true) {
      true_count += 1;
    } else {
      false_count += 1;
    }
    if (true_count === false_count)
      {
        answer = false;
      } else {
        answer = true
      }
  })
  
  // perform callback on each element
  
  // until majority of callback return values = true
  
  // if number of true === number of false, majority returns false
  return answer;
  
}

// Use these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
