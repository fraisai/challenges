// Repeat a string a num number of times

// Method 1
function repeatStringNumTimes(str, num) {
 // Base case
 if (num <= 0) {
   return ""
 } else if (num === 1) {
   return str;
 }
 return str + repeatStringNumTimes(str, num-1);
}

// Method 2: Use .repeate()
function repeatStringNumTimes(string, times) {
 //Step 1. If times is positive, return the repeated string
 if (times > 0) {
   return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
 }
  //Step 2. Else if times is negative, return an empty string if true
 else {
   return "";
 }
}

repeatStringNumTimes("abc", 3);
console.log("answer", repeatStringNumTimes("*", 8))
