// merge
const sortedA1 = [];
const sortedB1 = [2];
const expectedMerge1 = [2];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [2, 3, 4, 7];
const sortedB3 = [3];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
    // make a new array that will hold the final sorted array
    const mergeArray = [];
    //   let i = 0;
    //   let j = 0;
    // Compare and merge elements from both left and right arrays until one of the arrays becomes empty.
    while (left.length && right.length) {

        // If the first element in the left array is smaller than the first element in the right array,
        // remove it from the left array using shift() and push it to the mergeArray.
        if (left[0] < right[0]) {
            mergeArray.push(left.shift());
        } else {
            // Otherwise, if the first element in the right array is smaller than or equal to the first element
            // in the left array, remove it from the right array using shift() and push it to the mergeArray.
            mergeArray.push(right.shift());
        }
    }

    // After the above while loop, one of the arrays might still have some elements left.
    // The following two while loops handle the remaining elements in the left and right arrays,
    // which are already sorted, and append them to the mergeArray.

    // Append any remaining elements from the left array.
    while (left.length) {
        mergeArray.push(left.shift())
    }
    // Append any remaining elements from the right array.
    while (right.length) {
        mergeArray.push(right.shift())
    }


    // Return the fully merged and sorted array.
    return mergeArray;
}
// The replit shell seems to have some setup issue
// do it on VS cod

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums = []) {

    if (nums.length < 2) {
        return nums;
    }
    //splitting the array into 2
    const leftArr = nums.slice(0, Math.floor(nums.length / 2));
    const rightArr = nums.slice(Math.floor(nums.length / 2), nums.length);

    const leftSorted = mergeSort(leftArr);
    const rightSorted = mergeSort(rightArr);


    return merge(leftSorted, rightSorted)
}

console.log(mergeSort(numsRandomOrder))