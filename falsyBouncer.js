// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.


function bouncer(arr) {
 let result = [];
 for (let i in arr) {
   if (arr[i]) {
     result.push(arr[i])
   }
 }
 return result;
}
bouncer([7, "ate", "", false, 9]);
