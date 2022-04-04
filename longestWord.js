// Create a function longestWord that that retuns the longest word of a sentence.
// If there are ties, the function should return the later word.



function longestWord(sentence) {
  let words = sentence.split(" ");
  
  let longest_word = words.reduce((longest, curr) => {
    if (curr.length >= longest.length) {
      longest = curr;
    }
    return longest
  }, "")
  
  return longest_word;
}


//Uncomment the lines below to test your function:
console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('JavaScript')); // => 'JavaScript'
console.log(longestWord('')); // => ''
