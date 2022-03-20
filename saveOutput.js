/*
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values
*/

function saveOutput(myfunc, password) {
  const object = {};
  function storage(num) {
    // if the password is passed in, then storage returns an object
    if (num === password) {      
      return object;
    } else {
      console.log("hey", object[num])
      return object[num] = myfunc(num)
    }
  }
  // return a function
  return storage;
}
// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
