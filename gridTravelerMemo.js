/*
You are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom right corner. You can only move DOWN or RIGHT.
*/

// O(row * col) time
// O(row + col) space

function gridTravelerMemo(row, col, memo = {}) {
  const key = m + ',' + n;
  
  // check if args are in memo
  if (row === 1 && col === 1) return 1;
  if (row === 0 || col === 0) return 0;
  
  return gridTravelerMemo(m - 1, n) + gridTravelerMemo(m, n - 1);
}

console.log(gridTravelerMemo(2, 3)); // 3
console.log(gridTravelerMemo(3, 2)); // 3
console.log(gridTravelerMemo(3, 3)); // 6
console.log(gridTravelerMemo(18, 18)); // 2333606220
