/*
Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. 
multiMap will return an object whose keys match the elements in the array of values. 
The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, 
where the input to each callback is the key.

*/

function multiMap(values, callbacks) {
  let obj = {};
  values.forEach(element => {
    let result = [];
    for (let j in callbacks) {
      result.push(callbacks[j](element))
      obj[element] = result;
    }
    return obj;
  })
  return obj;
}
// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(functions[1]("sup"))
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
