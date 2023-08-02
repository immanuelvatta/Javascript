/* 
Stable sort

Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
Space: O(1) constant.
For review, create a function that uses BubbleSort to sort an unsorted array in-place.
For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < (nums.length - (i + 1)); j++) {
            //check if j is greater than j+1
            if (nums[j] > nums[j + 1]) {
                // if true we swap
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                // [nums[j],nums[j+1]] = [nums [j+1], nums[j]]
            }
        }
    }
    return nums
}


console.log(numsRandomOrder)
console.log(bubbleSort(numsRandomOrder))
console.log(numsReversed)
console.log(bubbleSort(numsReversed))




/* 
https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
    
Selection sort works by iterating through the list, finding the minimum
value, and moving it to the beginning of the list. Then, ignoring the first
position, which is now sorted, iterate through the list again to find the
next minimum value and move it to index 1. This continues until all values
are sorted.
Unstable sort.

Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
Space: O(1) constant.
Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example,
    you run selection sort for 10 iterations only to display the first 10
    sorted items.
*/


// Probably need nested for loops or while loops



const numsOrdered1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let min = nums[i]
            let minIndex = i;
            if (nums[j + 1] < nums[j]) {
                // log the minimum and index value at minimum
                min = nums[j + 1];
                minIndex = j + 1;
            }
            // swap nums[i] and wherever the minimum value is
            temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }
    return nums;
}
console.log(numsRandomOrder1);
console.log(selectionSort(numsRandomOrder1));
console.log(numsReversed1);
console.log(selectionSort(numsReversed1));