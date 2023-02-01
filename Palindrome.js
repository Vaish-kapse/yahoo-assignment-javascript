function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
console.log(isPalindrome("racecar"))

console.log(isPalindrome("madam"))
                         
console.log(isPalindrome("kavitha"))

console.log(isPalindrome("keyboard"))
