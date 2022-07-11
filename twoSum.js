/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

// METHOD 1: O(N)
const twoSum = (arr, target) => { 
  // declare object and store the difference of target and element
  const diff = new Set();
  for (let el of arr) {
    if (diff.has(el)) return true; // if current elemtn exists in diffs, we saw its complement before
    else diff.add(target - el); // otherwise add the complement to the diffs
  }
  return false;
}

// // METHOD 2: O(N^2)
// const twoSum = (arr, target) => { 
//   let first = 0;
//   let second = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) return true
//     }
//   }
//   return false;
// }
