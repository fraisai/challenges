/*
Create a function prioritize that accepts an array and a callback. 
The callback will return either true or false. 

prioritize will iterate through the array and perform the callback on each element, and return a new array, 
where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

*/

function prioritize(array, callback) {
  let part1 = []
  let part2 = []
  let result = [];
  array.forEach(element => {
    if (callback(element)) {
      part1.push(element)
    } else {
      part2.push(element)
    }
    result = part1.concat(part2);
  })
  return result;
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
