/*
Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the 'name' argument passed into the function
Add an age property to the newly created object with its value being the 'age' argument passed into the function
Return the object
*/

function makePersonObject(name, age) {
	const obj = {
    name: name,
    age: age
  };
  console.log(obj)
  return obj;
}

const vicky = makePersonObject('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
