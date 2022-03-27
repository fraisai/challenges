/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
 //hotdog, dog --> check if the ending of hotdog (string) is dog (target)
 //str[-3]
 // str.substr(start, length)

 let tar_len = target.length;

 if (str.substr(-1*tar_len) === target) {
   return true;
 } else {
   return false;
 }
}

confirmEnding("Bastian", "n");
