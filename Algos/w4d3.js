/* 
Given by Riot games.
*/
// b70a164c32a20c10

// b 70
// a 184
// c 42

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let output = "";
    let letterValueTracker = {};
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) { // if the character is a letter
            let numberString = "";
            let j = i + 1;
            while (!isNaN(s[j])) {
                numberString += s[j];
                j++;
            }
            if (letterValueTracker[s[i]]) { // Check if the key exists in the table
                letterValueTracker[s[i]] += parseInt(numberString);
            }
            else letterValueTracker[s[i]] = parseInt(numberString);
        }

    }
    let array = Object.keys(letterValueTracker).sort();
    for (el of array) {
        output += el + letterValueTracker[el];
    }
    return output;
}


console.log(rehash(str1))


/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/
//   
const strA1 = "Hello World";
const strB1 = "lloeh wordl";
//const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    let letterFreq = {};
    let s1L = s1.toLowerCase();
    let s2L = s2.toLowerCase();
    for (let i = 0; i < s2.length; i++) {
        if (letterFreq[s2L[i]]) letterFreq[s2L[i]]++;
        else letterFreq[s2L[i]] = 1;
    }
    for (let j = 0; j < s1.length; j++) {
        if (!letterFreq[s1L[j]]) return false;
        else {
            letterFreq[s1[j]]--;
            if (letterFreq[s1L[j]] < 0) return false;
        }
    }
    return true;
}

console.log(canBuildS1FromS2(strA1, strB1))
console.log(canBuildS1FromS2(strA2, strB2))
console.log(canBuildS1FromS2(strA3, strB3))
console.log(canBuildS1FromS2(strA4, strB4))
console.log(canBuildS1FromS2(strA5, strB5))