// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.

// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
  // push(val) adds val to the end
  // pop() removes a value from the end and returns it
  // unshift(val) adds val to the beginning
  // shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods

function createArray() {
  // initialize array as an empty array
  this.array = [];
  // index of array
  this.index = 0;
  this.length = 0;

  // push() adds input parameter value as the last element of an array and returns length of the array
  this.push = function(val) {
    this.array[this.index] = val; // set element at index equal to val
    this.index += 1; // increment index property by 1
    this.length += 1; // increase length by 1
    return this.length; // .push method returns the length of array
  }; 

  // pop() removes a value from the end and returns it
  this.pop = function() {
    let lastEl = this.array.slice(-1)[0]; // lastEl accesses the last element
    this.array = this.array.slice(0, -1); // update array property without the last element
    this.index -= 1; // decrement the index by 1
    this.length -= 1; // decrease length by 1
    return lastEl; // return the last element
  };

  // unshift(val) adds val to the beginning and returns the new length of the array.
  this.unshift = function(val) {
    this.array.splice(0, 0, val); // modifies array in place by adding val to the 0th index and deleting 0 items
    this.index += 1; // increment the index by 1 
    this.length += 1;// increase length by 1
    return this.length;
  };

  // shift() removes a value from the beginning and returns it
  this.shift = function() {
    let firstEl = this.array.slice(0)[0]; // access the first element
    this.array = this.array.slice(1); // update the array property to remove the first element
    this.index -= 1; // decrement the index by 1
    this.length -= 1; // decrease length by 1
    return firstEl; // return the first element
  };
}
let array = new createArray();
// console.log(array);
// console.log(Object.getOwnPropertyNames(array));
console.log(array.push(0));
console.log(array.push(1));
console.log(array.push(2));
console.log(array.pop());
console.log(array.unshift(0));
console.log(array.shift());
console.log(array);
