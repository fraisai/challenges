/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, 
 where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly
 from the object, instead of invoking the original function again.
*/

const fastCache = func => {
    let cache = {};
    return function(val) {
        if (!cache.hasOwnProperty(val)) cache[val] = func(val);
        return cache[val];
    }
};
