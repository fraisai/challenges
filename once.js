/*
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and return that output. 
If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

const once = (cb_func) => {
  // count keeps track of how many times the function is called
  let counter = 0;
  // when returned function called 1st time: call the callback and return its output
  let output = undefined;
  function first_time(num) {
      // if counter = 0, then function has not been called yet so if it is called for the first time, then it should called the callback and return the output
    if (counter === 0) {
      output = cb_func(num);
      counter++;
    }
    // if once function called more than once, return output value of 1st time
    return output;
  }
  // returns function
  return first_time;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
