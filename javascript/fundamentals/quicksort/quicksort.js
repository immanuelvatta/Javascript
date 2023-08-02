function quickSort(arr){
    //base cases
    if(arr.length < 2){
        return arr;
    }
    //setting the pivot to be in the middle
    let pivot = arr[arr.length-1];
    let leftSide = [];
    let rightSide = [];
    for (let i = 0; i < arr.length -1; i++){
        if (arr[i]< pivot){
            leftSide.push(arr[i]);
        }
        else{
            rightSide.push(arr[i]);
        }
    }
    //below is same as [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
    return [].concat(quickSort(leftSide), pivot, quickSort(rightSide));
    
}

const array = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ] 
console.log(array);
console.log(quickSort(array));

function quicksort2(arr){
    let rightSide = arr.length-1;
    let leftSide = 0;
    partition(rightSide,leftSide, arr)

}

function partition(right, left, arr){
    // pick a pivot
    // keep swapping until its partitioned
    //return the partition index 
    let pivot = Math.floor(left + right) / 2
}