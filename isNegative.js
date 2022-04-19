// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false

function isNegative(num) {
 if (num === 0) { // if num is 0, return false
   return false;
 }

 if (num < 0) { // if num is negative, return true
   return true;
 }

 if (num > 0) { // if num is positive, return false
   return false;
 }
}
