/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

ransomNote = "a" 
magazine = "b"

var canConstruct = function(ransomNote, magazine) {
    var magazineChars = {};
    for (var i = 0; i < magazine.length; i++) {
        var char = magazine[i];
        if (magazineChars[char]) {
            magazineChars[char]++;
        } else {
            magazineChars[char] = 1;
        }
    }
    for (var i = 0; i < ransomNote.length; i++) {
        var char = ransomNote[i];
        if (magazineChars[char] && magazineChars[char] > 0) {
            magazineChars[char]--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct(ransomNote, magazine))