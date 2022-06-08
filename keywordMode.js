/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
  let newArr = array.flat(Infinity).sort();
  const wordObj = newArr.reduce((obj, key) => {
      key in obj ? obj[key] += 1 : obj[key] = 1;
      return obj;
  }, {})

  let count = Object.values(wordObj);
  let max = Math.max(...count)
  let results = [];
  for (let key in wordObj) {
      if (wordObj[key] === max) results.push(key);
  }
  console.log(results)

  return results;
};
keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) 
