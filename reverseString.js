/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
 // convert string into an array
 let arr = str.split("")

 // reversed array of characters
 let rev = arr.reverse()

 // join elements of array together to reform string
 let newStr = rev.join("")
 return newStr;
}
reverseString("hello");
