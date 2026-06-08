/*
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
function twoSum(nums, target){
    output = []
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j]==target){
                output.push(i)
                output.push(j)
                return output
            }
        }
    }
}
*/
/*
//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function missingNumber(nums){
    sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++){
        if (sorted[i] != i){
            return i
        }  
    return sorted.length 
} 
}

*/



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
  
