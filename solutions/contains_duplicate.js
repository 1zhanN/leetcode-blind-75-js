// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums){
    const seen = new Set();
    console.log(seen);
for (const num of nums) {
        // Check if the number already exists in the Set
        if (seen.has(num)) {
            return true;
        }
        // Mark this number as seen by adding it to the Set
        seen.add(num);
    }
    return false;
}
function containsDuplicate2(nums) {
    // Sort numbers in ascending order
    nums.sort((a, b) => a - b);
    
    // Check if any number matches its immediate neighbor
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}
    