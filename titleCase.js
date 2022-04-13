/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
 // make sure all the characters are lower case
 str = str.toLowerCase()
 // Convert string into an array of words
 let arr = str.split(" ");

 // to access a character in the array of words
 // arr[0] = accesses the word but
 // arr[0][0] = accesses the first character of the word
 for (let i in arr) {
   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1)
 }

 // Join the elements of the array into a single new string
 let newStr = arr.join(" ")

 return newStr;
}

titleCase("I'm a little tea pot");
