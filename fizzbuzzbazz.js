/*
Extension: 
Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
// "buzz" in place of numbers divisble by 5 but not by 3 or 7,
// "bazz" in place of numbers divisble by 7 but not by 3 or 5,
// "fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
// "fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
// "buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
// and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.
fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22]
*/

const fizzbuzzbazz = num => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr[i] = i + 1;

        // divisible by 3
        if (arr[i] % 3 === 0) {

            // Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
            if (arr[i] % 5 > 0 && arr[i] % 7 > 0) {
                arr[i] = 'fizz';
            }

            // and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.
            if (arr[i] % 5 === 0 && arr[i] % 7 === 0) {
                arr[i] = 'fizzbuzzbazz';
            }

            // "fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
            if (arr[i] % 5 === 0 && arr[i] % 7 > 0) {
                arr[i] = 'fizzbuzz';
            }

            // "fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
            if (arr[i] % 7 === 0 && arr[i] % 5 > 0) {
                arr[i] = 'fizzbazz';
            }
        }

        // NOT divisible by 3
        if (arr[i] % 3 > 0) {
            // "buzz" in place of numbers divisble by 5 but not by 3 or 7,
            if (arr[i] % 7 > 0 && arr[i] % 5 === 0) {
                arr[i] = 'buzz';
            }

            // "bazz" in place of numbers divisble by 7 but not by 3 or 5,
            if (arr[i] % 7 === 0 && arr[i] % 5 > 0) {
                arr[i] = 'bazz';
            }
            
            // "buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
            if (arr[i] % 5 === 0 && arr[i] % 7 === 0) {
                arr[i] = 'buzzbazz';
            }
        }
    }
    return arr;
};
