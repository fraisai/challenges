/*
Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. 

This function will:
1. Create an empty object
2. Add a name property to the newly created object with its value being the 'name' argument passed into the function
3. Add an age property to the newly created object with its value being the 'age' argument passed into the function
4. Create a property greet where the value is a function that logs "hello".

Return the object


*/

function makePersonObject(name, age) {
	const obj = {
		name: name,
		age: age, 
		greet: (name) => {
			console.log(`Hello ${name}`);
		}
  };
  console.log(obj)
  return obj;
}

const vicky = makePersonObject('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
console.log(vicky.greet()); // -> Logs 'Hello Vicky'
