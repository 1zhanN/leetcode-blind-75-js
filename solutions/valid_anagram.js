var isAnagram = function(s, t) {
    
    hashmap = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
       
        if (hashmap[char] == undefined) {
            hashmap[char] = 1;
        } else {
            hashmap[char] += 1;
        }
    }
    //{'a': 3, 'n': 1, 'g': 1, 'r': 1, 'm': 1}    ->  {a : count, ...}

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (hashmap[char] == undefined) {
            return false;
        } else {
            hashmap[char] -= 1;
        }
    }
    for (const key in hashmap) {
        if (hashmap[key] !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("listen", "silent")); // true