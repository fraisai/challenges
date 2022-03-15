/*
Now we are going to create a function addByX that returns a function that will add an input by x.
const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
*/

function addByX(num) {
  function addinput(x) {
    return num + x;
  }
  return addinput;
}
console.log(addByX(2)(0))

// num = 2 and x = 1 and x = 2
const addByTwo = addByX(2);
// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1)) //should return 3
// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2)); //should return 4

// num = 3 and x = 1, 2
const addByThree = addByX(3);
console.log(addByThree(1)); //should return 4
console.log(addByThree(2)); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
