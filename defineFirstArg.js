/*
Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
Additional arguments needed by the passed-in function will need to be passed into the returned function.

*/

function defineFirstArg(func, ...args) {
  function insideFn(...add) {
    return func(args, ...add);
  }
  return insideFn;
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15


// METHOD 2:
// input: function and an argument (passed in function accepts 1 argument or more)
// output: function

// inner function: invokes the passed in function with the passed in argument as the passed in function's 1st argument and additional arguments needed by the passed-in function will need to be passed into the returned function

function defineFirstArg2(func, arg) {
  console.log(arg)
  function perf(...arg1) {
    console.log(arg1)
    let answer = func(arg, ...arg1);
    return answer;
  }
  return perf;
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg2(subtract, 20);
console.log(subFrom20(5)); // should log: 15
