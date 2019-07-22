// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']
function alphaSort(array){
    array.sort()
    return array
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']
function strLengthSort(array){

    array.sort(function(a,b) {
        
        return a.length - b.length;

    });
    return array
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
// sumSort([
//   [9, 1, 9],
//   [2],
//   [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]
// function sumSort(array){
//     let result = [];
//     array.forEach(function(arrayOfNumbers){
//         let arraySum = addedArray(arrayOfNumbers)
//         let arrayKeySum = {[arraySum]:arrayOfNumbers} 
//         result.push(arrayKeySum);
//     });
// }

function sumSort(arrayOfArrays)
{
    return arrayOfArrays.sort(compareSums);
}
// compares the sums of the arrays and giving a positive number a 1 and a negative number a -1.
function compareSums(arrayA, arrayB){
    let compareResult;
    if (addedArray(arrayA) > addedArray(arrayB)){
        compareResult = 1;
    } else if (addedArray(arrayA) < addedArray(arrayB)){
        compareResult = -1;
    } else
    compareResult = 0;

    return compareResult;
}
// adds the sums of each array in the array and outputs it in a new array.
function addedArray(numArray){
    let arraySum = 0;
    for (let i = 0; i < numArray.length; i++) {
        arraySum += numArray[i] ;
    }
    return arraySum;
}

// exampled of a more compact compareSums

// function compareSums(arrayA, arrayB){
//     return addedArray(arrayA) - addedArray(arrayB);
// }