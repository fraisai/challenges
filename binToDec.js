/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

** Binary is read from right to left


For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/


*/
// ========== METHOD 1: USING forEach ================ 
// function binToDec(binString){
//     // convert binString into an array of characters and then reverse the array (thus the last value is now the first so the binary number can be "read" from left to right instead of right to left)
//     let arr = binString.split("").reverse();

//     // declare the variable binary and initialize it to 0
//     let binary = 0;

//     // declare the variable exp that will keep track of the exponent  
//     let exp = 0;

//     // iterate through arr
//     arr.forEach(el => {
//         // if the current element is the string of '1'
//         if (el === '1') {
//             // add 2 ^ exp to the binary variable
//             binary += Math.pow(2, exp);
//         } else { // if the current element is the string of '0', add 0 to binary
//             binary += 0
//         }
//         // increment the value of the exponent by 1
//         exp += 1;
//     })
//     return binary; // return the final binary digit
// }

// ========== METHOD 2: USING A HASH ================ 
function binToDec(binString){
    // convert binString into an array of characters and then reverse the array (thus the last value is now the first so the binary number can be "read" from left to right instead of right to left)
    let arr = binString.split("").reverse();

    // Create a hashtable, map1
    const map1 = new Map();

    // declare the variable binary and initialize it to 0
    let binary = 0;

    // create a key value pair
    map1.set('binary', binary)
    // declare the variable exp that will keep track of the exponent  
    let exp = 0;

    // iterate through arr
    arr.forEach(el => {
        // if the current element is the string of '1'
        if (el === '1') {
            // add 2 ^ exp to the binary variable
            map1.set('binary', binary += Math.pow(2, exp))
        } else { // if the current element is the string of '0', add 0 to binary
            map1.set('binary', binary += 0)
        }
        // increment the value of the exponent by 1
        exp += 1;
    })
    return map1.get('binary'); // return the final binary digit
}


/*
const map1 = new Map();
if (el === '1') {
    map1.set(binary, binary += Math.pow(2, exp))
} else {
    map1.set(binary, binary += 0)
}
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
*/
console.log(binToDec('0'));  // -> 0
console.log(binToDec('11')); //  -> 3
console.log(binToDec('100')) // -> 4
console.log(binToDec('101')) // -> 5
console.log(binToDec('0101')) // -> 5
