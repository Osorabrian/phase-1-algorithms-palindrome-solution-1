function reverseString(word){
  // takes string splits it, reverses it and then joins it together to form a reversed string.
    return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false
  //compare reversed string to oroginal string it returns true
  return reverseString(word) === word
}

/* 
  Create a reverseString function that reverses the string.

  create boolean expression to compare original string and reversed string
*/

/*
  The function will take in a string, then split into a list then we reverse the list 
  after the list has been reversed we join it to form a reversed string. After that we compare
  if the original string and the reversed string match using boolean expression, if they are equal
  the function isPlindrome should return true else it return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('brian'))

  console.log("Expecting: true")
  console.log("=>", isPalindrome('mum'))

  console.log("Expecting: true")
  console.log("=>", isPalindrome(''))

  console.log("Expecting: true")
  console.log("=>", isPalindrome(" "))

  console.log("Expecting: true")
  console.log("=>", isPalindrome('a'))

  console.log("Expecting: ih");
console.log("=>", reverseString("hi"));

console.log("");

console.log("Expecting: tobor");
console.log("=>", reverseString("robot"));

console.log("");

console.log("Expecting: mom");
console.log("=>", reverseString("mom"));
}

module.exports = isPalindrome;
