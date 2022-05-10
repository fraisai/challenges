//loop backwards through an array using forEach method and without actually reversing the array itself:

function reverseForEach(array) {
  return array.slice().reverse().forEach(el => console.log(el))
}


let arr = [1, 2, 3];


