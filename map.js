/*
Create a function subtractTwo that accepts a number and returns that number minus 2.

Then create a function map that takes two inputs -

an array of numbers (a list of numbers)
a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. 
Please do not use the native map or forEach method.

map([3,4,5], subtractTwo); //-> [1,2,3]
subtractTwo(10); //-> 8
subtractTwo(12); //-> 10
*/

function map(arr, callback) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(callback(arr[i]));
  }
  return new_arr;
}

function subtractTwo(num) {
  return num - 2;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
