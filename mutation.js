/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

*/

// Method 1: Without using regex
function mutation(arr) {
 // return true if 1st element contains all the letters of the 2nd element

 let answer = true; // initialize answer to true
 let str1 = arr[0].toLowerCase(); // 1st string
 let str2 = arr[1].toLowerCase(); // 2nd string

 for (let i in str2) {
   // if 1st string does NOT include a letter from 2nd string
   if (!str1.includes(str2[i])) {
     // answer is switched
     answer = !answer;
   } else {
     answer = answer;
   }
 }
 return answer;
}

mutation(["voodoo", "no"])//should return false.
mutation(["ate", "date"]) //should return false.
console.log("hey", mutation(["hello", "hey"]));
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])///should return true.
