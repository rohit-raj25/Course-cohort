/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let n = str.length;
  if (n === 0 || n === 1) return true;
  for (let i = 0; i < n / 2; i++) {
    if (str.charAt(i) !== str.charAt(n - i - 1)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
