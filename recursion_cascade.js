// 7. Challenge: cascade
/*
Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation!

cascade(12345) should print

12345
1234
123
12
1
12
123
1234
12345

*/

function opp_cascade(string, store) {
    string = String(string);
    if (store.length === 0) {
      return;
    }

    let newStr = string + store[store.length - 1]; 
    console.log(parseInt(newStr));
    store = store.slice(0, -1);
    return opp_cascade(newStr, store)
}

function cascade(number, store = []) {
    let str = String(number);
    if (str.length === 1) {
        console.log(parseInt(str))
        let newStr = str + store[store.length - 1];
        store = store.slice(0, -1);
        console.log(parseInt(newStr));
        return opp_cascade(newStr, store);
    }

    
    console.log(parseInt(str));
    store += str[str.length - 1]; 
    let newNum = str.slice(0, -1);
    return cascade(newNum, store);
}




// // Uncomment to test your work!
cascade(111);
cascade(12345);
cascade(144254);

// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */
