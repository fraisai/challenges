/*
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and 
the callback as the second parameter.
*/

// function after takes number of times callback needs to be executed and callback as 2nd parameter
function after(times, callback_func) {
  let counter = 0;
  let output = undefined;
  function ready(input) {
    counter++;
    if (counter >= times) {
      output = callback_func(input);
    } 
    return output;
  }
  return ready;
}
const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// METHOD 2: USING REST PARAMETERS AS INPUT
/*
function after(times, cb_func) {
  let counter = 0;
  function after_times(...str) { // using rest parameter
    if (counter < times) {
      counter++;
    }
    if (counter >= times) {
      counter++;
      return cb_func(...str); // using spread operator
    }
    // if (counter > times) {
    //   return "too many times"
    // }
  }
  return after_times;
}
*/

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
