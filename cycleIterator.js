/*
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
When first invoked, the returned function will return the first element of the array. 
When invoked a second time, the returned function will return the second element of the array, and so forth. 
After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second 
after that, and so forth.
*/

function cycleIterator(array) {
  let index = 0;
  function invoke() {
    // first time invoked, returns 1st element of array
    console.log("index", index)
   	let result = undefined; 
    if (index < array.length) {
      result = array[index];
      index++;
    } else {
      index = 0;
      result = array[index]
    }
    return result
  }
  // returns function
  return invoke;
}
// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
