/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include 
letters and numbers. */

var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let leftPointer = 0
    let rightPointer = s.length - 1
    console.log(s)
    while (leftPointer < rightPointer) {
        if (s[leftPointer] != s[rightPointer]){
            return false
        }
        leftPointer++
        rightPointer--                  
    }
    return true
} 
  
console.log(isPalindrome("A man, a plan, a canal: Panama"));
