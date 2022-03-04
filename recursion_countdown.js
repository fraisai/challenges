// Challenge: Use recursion to return an array containing the countdown numbers

function countdown(n){
 let result = [];
 if (n < 1) {
   return result;
 }
 result = countdown(n - 1)
 result.unshift(n)
 return result;
}

countdown(10)
