/*
Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  let combinedArr = matrix.flat(Infinity);
  let answer;
  (combinedArr.includes(target)) ? answer = true : answer = false;
  return answer;
};

const matrix = [
  [-9, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [39, 43, 49, 50, 61],
  [64, 67, 72, 75, 81],
  [88, 90, 95, 97, 99]
];

console.log(findIn2dMatrix(matrix, 49)) //.toBe(true));
console.log(findIn2dMatrix(matrix, 39)) //.toBe(true));
console.log(findIn2dMatrix(matrix, 61)) //.toBe(true));
