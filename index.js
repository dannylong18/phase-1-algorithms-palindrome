
/* function isPalindrome (word) {
    let string = word
    let reverseString = word.split('').reverse().join('')

    if (string === reverseString) {
      return true
    }

    else { return false }
  // 1. create function
  // 2. establish arguement
  // 3. write body code to meet deliverables
}

isPalindrome('abba')
isPalindrome('racecar')
isPalindrome('a')
isPalindrome('robot')
isPalindrome('ab')

  write function that compares the string passed as an arguement to the reverse of that string. if they are the same, return 'true', else return 'false'
*/

/*
  write function and test string passed as arguement to reverse string using the 'reverse()' method, then use an if statement to compare the two
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here 

  console.log ('expecting: true')
  console.log ('=>', isPalindrome("dad"))
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome (word) {
  let string = word
  let reverseString = word.split('').reverse().join('')

  if (string === reverseString) {
    return true
  }

  else { return false }
// 1. create function
// 2. establish arguement
// 3. write body code to meet deliverables
}

isPalindrome('abba')
isPalindrome('racecar')
isPalindrome('a')
isPalindrome('robot')
isPalindrome('ab')