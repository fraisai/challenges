/* 
Challenge: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
 let arr = str.split(" ")
 let word = 0;
 for (let i in arr) {
   if (arr[i].length > word) {
     word = arr[i].length
   }
 }
 return word;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
