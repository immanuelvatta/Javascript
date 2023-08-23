/* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/


const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Groot",
        category: "Cute",
    },
    {
        name: "House of Dragon",
        category: "TV Show",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "Stranger Things",
        category: "TV Show",
    },
];

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Groot",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "TV show": [
        {
            name: "House of Dragon",
            category: "TV show",
        },
        {
            name: "Stranger Things",
            category: "TV show",
        },
    ],
};

/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/
function groupObjects(items) {
    const expected = {}
    for (const item of items) {
        //if categories doesn't exist create a new array for that category
        const categories = item.category.toLowerCase();
        if (!expected[categories]) {
            expected[categories] = [];
        }
        // 
        expected[categories].push(item)
    }
    // return the hash table
    return expected;
}

console.log(groupObjects(objects))

/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c"; // ac
const T1 = "ad#c"; // ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##"; // ""
const T2 = "c#d#"; // ""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c"; // c
const T3 = "#a#c"; // c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c"; // c
const T4 = "ac#"; // a
const expected4 = false;
// Explanation: S becomes "c" while T becomes "a".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    const processString = (str) => {
        const stack = [];

        for (const char of str) {
            if (char === "#") {
                stack.pop(); // Handle backspace
            } else {
                stack.push(char);
            }
        }

        return stack.join('');
    }
    return processString(S) === processString(T)
}
console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3));
console.log(backspaceStringCompare(S4, T4));



