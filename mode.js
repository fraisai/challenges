/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
    let mode = array[0];
    let maxOccur = 0;
    let modeObj = array.reduce((obj, el) => {
        (el in obj) ? obj[el] += 1 : obj[el] = 1; // 

        if (obj[el] > maxOccur) { // if number of occurrences of key is greater than the maxOccur
            maxOccur = obj[el]; // the new maxOccur number becomes the value of the key
            mode = parseInt(el); // the new mode becomes the numeric value of the key 
        }

        if (obj[el] === maxOccur && parseInt(el) > mode) {
            mode = parseInt(el);
        }
        return obj;
    }, {});
    return mode;
};

// mode([3, 2, 4, 3]) // -> 3
// mode([7, 5, 8, 8, 2, 5])  //-> 8
arr = [1, 6, 7, 5, 8, 8, 8, 10, 6, 10, 4, 6, 11];
console.log(mode(arr)) //.toBe(6);
