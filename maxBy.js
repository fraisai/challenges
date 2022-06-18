// write a function "maxBy" that takes an array and a callback as arguments. 
// "maxBy" will iterate thru the array and pass each array element to the callback as an argument. 
// "maxBy" will determine the maximum value among all the outputted values from this callback. 
// The array element that produced this value is returned by "maxBy".

// const nums = [-1, 1, 5, 2, -7]
// maxBy(nums, Math.abs)  -> -7 (because Math.abs(-7) produces 7 which is greater than all other outputs 5, 2, and 1)
//
// maxBy(nums, (x) => {
//   return 2 * x - 1000;
// });  -> 5

function maxBy(arr, callback) {
  // find the max output
  const max = Math.max(...arr.map(el => callback(el)));

  // let num = the array element that produces the max output
  let num;

  // create a hashmap
  const map1 = new Map();

  arr.forEach(el => {
    map1.set(el, callback(el));
    if (map1.get(el) === max) num = el; 
  });

  return num;
}

// TESTS
// const nums = [-1, 1, 5, 2, -7];
// console.log(maxBy(nums, Math.abs));  // -> -7 (because Math.abs(-7) produces 7 which is greater than all other outputs 5, 2, and 1)

// console.log(maxBy(nums, (x) => {
//   return 2 * x - 1000;
// }));  // -> 5
