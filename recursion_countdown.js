// Challenge: Use recursion to return an array containing the countdown numbers

// METHOD 1
function countdown(n){
 let result = [];
 if (n < 1) {
   return result;
 }
 result = countdown(n - 1)
 result.unshift(n)
 return result;
}

countdown(10);

// METHOD 2: Challenge 1
// function countdown(n) {
//   if (n === 1){
//     console.log(n);
//     return 1;
//   }
//   console.log(n);
//   return countdown(n-1);
// }

// // To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);
