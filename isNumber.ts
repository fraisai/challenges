// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false

function isNumber(value: number): boolean {
 if (typeof value === "number") {
   return true;
 } else {
   return false;
 }
}
