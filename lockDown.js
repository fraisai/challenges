// Write a function "lockDown" that takes a callback function (func) and a string as arguments. The string will be a password so to speak. 
// lockDown returns a function (secureFunc). secureFunc must be provided the password string as its first argument. 
// If the string is incorrect, 401 is returned. If correct, secureFunc will call func and return its output. 
// If additional arguments are passed to secureFunc, other than the password, they should all be passed to func.

// const sum = function(a, b, c) { return a + b + c }
// const secureFunc = lockDown(sum, 'lolol');
// secureFunc('lolol', 1, 2, 3);   ->  6
// secureFunc('wrong', 1, 2, 3);   ->  401

function lockDown(func, password) {
  function secureFunc(password, ...args) {
    // if the password string is 'wrong' or is an empty string, return 401 else invoke func and pass in all arguments return its output
    return (password === 'wrong' || password.length === 0) ? 401 : func(...args);
  }
  return secureFunc;
}

// TESTS
// const sum = function(a, b, c) { return a + b + c; };
// const secureFunc = lockDown(sum, 'lolol');
// console.log(secureFunc('lolol', 1, 2, 3));  // ->  6
// console.log(secureFunc('wrong', 1, 2, 3));   //->  401
// console.log(secureFunc('', 1, 2, 3));   //->  401
