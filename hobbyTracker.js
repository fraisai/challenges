/*
Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. 
hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.
When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key 
corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, 
it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);

updateHobbies('yoga', 2); 
// { yoga: 2, baking: 0, piano: 0 }

updateHobbies('baking', 3);
// { yoga: 2, baking: 3, piano: 0 }

updateHobbies(); 
// 'tracker has been reset!'

*/

// input of hobbyTracker(): array of hobbies
// output of hobbyTracker(): return inner function (return practice())

// Overall Strategy:
// 1. create a cache object and then I want to set all the element of the array, hobbies, as the key of the cache object
// 2. create an inner function that takes in a hobby (string) and the number of hours spent practicing that hobby as parameters
// 3. when inner function is invoked, we want to determine if any parameters were passed in because:
// 4. if inner function is invoked with NO arguments: reset all the values in cache object to 0 (cache[hobby = key] = 0) and return the string "tracker has been reset!"
// 5. BUT if inner function IS invoked with arguments: update the cache object by adding the value passed in with the value of the corresponding key that is passed in as a hobby and then return the updated cache object;

// hobbies = an array = [hob1, hob2, hob3]
function hobbyTracker(hobbies) {
  // initialize an empty cache object
  const cache = {};
  // each hobby (element of the input array) = key
  // iterate through the array, hobbies, and then set the key of the cache equal to the element of hobbies.
  for (let i = 0; i < hobbies.length; i++) {
    let key = hobbies[i];
    cache[key] = 0;
  }
  // input of practice(): string (representing the hobby) and integer (hours practicing that hobby)
  function practice(hobby, hours) {
    // if practice is invoked with no arguments
    if (!hobby && !hours) {
      // reset all values in cache to zero: 
      // first iterate through the cache object
      for (let key in cache) {
        // then set all values in cache to zero
        cache[key] = 0;
      }
      
      // return string 'tracker has been reset!'
      return 'tracker has been reset!';
    } else {
      // if returned function is invoked with both parameters
      // update the cache object by adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby'
      // cache[hobby] is the currently existing value
      cache[hobby] += hours;
      // return the updated cache
      return cache;
    }
    
  }
  return practice;
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
