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